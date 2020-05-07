import { defineMessages } from 'react-intl';

export default defineMessages({
    applicationName: {
        id: 'applicationName',
        defaultMessage: 'Reactive Localization Test with React and MobX'
    },
    messageLogTitle: {
        id: 'messageLogTitle',
        defaultMessage: 'Message Log'
    },
    zoomInTitle: {
        id: 'zoomInTitle',
        defaultMessage: 'Zoom in'
    },
    zoomOutTitle: {
        id: 'zoomOutTitle',
        defaultMessage: 'Zoom out'
    },
    automaticLanguage: {
        id: 'automaticLanguage',
        defaultMessage: 'Automatic'
    },
    mapNavigatorTitle: {
        id: 'mapNavigatorTitle',
        defaultMessage: 'Navigate map to'
    },
    navigateMapButton: {
        id: 'navigateMapButton',
        defaultMessage: 'Navigate'
    },
    mapTitle: {
        id: 'mapTitle',
        defaultMessage: 'Map'
    },
    markerAddedMessage: {
        id: 'markerAddedMessage',
        defaultMessage: 'Marker was added to the map at {position}.'
    },
    addNewCommentButton: {
        id: 'addNewCommentButton',
        defaultMessage: 'Add new comment'
    },
    addNewCommentTitle: {
        id: 'addNewCommentTitle',
        defaultMessage: 'Add new comment'
    },
    cancelButton: {
        id: 'cancelButton',
        defaultMessage: 'Cancel'
    },
    commentPrefix: {
        id: 'commentPrefix',
        defaultMessage: 'Someone commented {time}:'
    },
    testAlertButton: {
        id: 'testAlertButton', 
        defaultMessage: 'Test alert()'
    },
    alertTestMessage: {
        id: 'alertTestMessage',
        defaultMessage: 'This is message for testing localization of a message in alert().'
    },
    catCountMessage: {
        id: 'catCountMessage',
        defaultMessage: '{count, plural,  one {A cat is} other {# cats are}} planning to kill {pronoun, select, male {him} female {her} other {them}}.'
    }
});
