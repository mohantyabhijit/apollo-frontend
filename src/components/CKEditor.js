// Note: We need to build the editor from source.
// We cannot use existing builds in this case.
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import PendingActions from '@ckeditor/ckeditor5-core/src/pendingactions';

let isDirty = false;

ClassicEditor
    .create( document.querySelector( '#editor' ), {
        plugins: [
            PendingActions,

            // ... other plugins
        ]
    } )
    .then( editor => {
        window.editor = editor;

        handleStatusChanges( editor );
        handleSaveButton( editor );
        handleBeforeunload( editor );
    } )
    .catch( err => {
        console.error( err.stack );
    } );

// Handle clicking the "Save" button by sending the data to a
// fake HTTP server (emulated here with setTimeout()).
function handleSaveButton( editor ) {
    const saveButton = document.querySelector( '#save' );
    const pendingActions = editor.plugins.get( 'PendingActions' );

    saveButton.addEventListener( 'click', evt => {
        const data = editor.getData();

        // Register the action of saving the data as a "pending action".
        // All asynchronous actions related to the editor are tracked like this,
        // so later on you only need to check `pendingActions.hasAny` to check
        // whether the editor is busy or not.
        const action = pendingActions.add( 'Saving changes' );

        evt.preventDefault();

        // Save the data to a fake HTTP server.
        setTimeout( () => {
            pendingActions.remove( action );

            // Reset isDirty only if the data did not change in the meantime.
            if ( data == editor.getData() ) {
                isDirty = false;
            }

            updateStatus( editor );
        }, HTTP_SERVER_LAG );
    } );
}

// Listen to new changes (to enable the "Save" button) and to
// pending actions (to show the spinner animation when the editor is busy).
function handleStatusChanges( editor ) {
    editor.plugins.get( 'PendingActions' ).on( 'change:hasAny', () => updateStatus( editor ) );

    editor.model.document.on( 'change:data', () => {
        isDirty = true;

        updateStatus( editor );
    } );
}

// If the user tries to leave the page before the data is saved, ask
// them whether they are sure they want to proceed.
function handleBeforeunload( editor ) {
    const pendingActions = editor.plugins.get( 'PendingActions' );

    window.addEventListener( 'beforeunload', evt => {
        if ( pendingActions.hasAny ) {
            evt.preventDefault();
        }
    } );
}

function updateStatus( editor ) {
    const saveButton = document.querySelector( '#save' );

    // Disables the "Save" button when the data on the server is up to date.
    if ( isDirty ) {
        saveButton.classList.add( 'active' );
    } else {
        saveButton.classList.remove( 'active' );
    }

    // Shows the spinner animation.
    if ( editor.plugins.get( 'PendingActions' ).hasAny ) {
        saveButton.classList.add( 'saving' );
    } else {
        saveButton.classList.remove( 'saving' );
    }
}
