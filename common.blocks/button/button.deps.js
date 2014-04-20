[{
    mustDeps : { block : 'i-bem', elems : 'dom' },
    shouldDeps : [
        {
            elems : ['text'],
            mods : { focused : 'yes', hovered : 'yes', disabled : 'yes', pressed : 'yes' }
        },
        { block : 'jquery', elem : 'event', mods : { type : 'pointer' } },
        'functions',
        'base-control'
    ]
},
{
    tech : 'spec.js',
    mustDeps : { tech : 'bemhtml', block : 'button' }
}]
