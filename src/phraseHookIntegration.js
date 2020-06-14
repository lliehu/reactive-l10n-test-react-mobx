import { useIntl as originalUseIntl } from 'react-intl';

function isPhraseEnabled() {
    return window.PHRASEAPP_ENABLED
}

function escapeId (id) {
    let config = window.PHRASEAPP_CONFIG;
    return  config.prefix + 'phrase_' + id + config.suffix;
}

function transformId(id) {
    const escapedString = id.replace("<", "[[[[[[html_open]]]]]]").replace(">", "[[[[[[html_close]]]]]]");
    return escapeId(escapedString);
}

export function useIntl() {
    const originalIntl = originalUseIntl();
    return Object.assign({}, originalIntl, {
        formatMessage: function(messageDescriptor) {
            const id = messageDescriptor.id;
            if (isPhraseEnabled()) {
                if (!id) {
                    console.error('Message id is required.');
                }
                return originalIntl.formatMessage({id: transformId(id)});
            }
            else {
                return originalIntl.formatMessage({id});
            }
        }
    });
}
