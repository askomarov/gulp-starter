import easySetup from "easy-toggler";

document.addEventListener('DOMContentLoaded', () => {
    'use strict'

    // EasyToggler: https://github.com/rah-emil/easy-toggler
    easySetup({
        // html attrs
        toggle: 'easy-toggle',
        add: 'easy-add',
        remove: 'easy-remove',
        class: 'easy-class',
        rcoe: 'easy-rcoe',
        parallel: 'easy-parallel',
        self: 'easy-self',
        selfRcoe: 'easy-self-rcoe',

        // Hooks
        onToggle($el){},
        onAdd($el){},
        onRemove($el){},
        onRcoe($el){},
    });

    // other code...
})
