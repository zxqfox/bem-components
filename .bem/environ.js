var PATH = require('path'),

    /** @const */
    __root = getGlobalRoot(),

    /** @type Function */
    join = PATH.join,
    /** @type Function */
    relative = PATH.relative,
    /** @type Function */
    resolve = PATH.resolve.bind(null, __dirname),
    /** @type Function */
    envresolve = PATH.resolve.bind(null, __root),

    /**
     * Путь до корня окружения
     *
     * NOTE: под окружением подразумеваем проект, сборку которого
     * мы осуществляем.
     *
     * @type String
     * @exports ENV_ROOT
     */
    ENV_ROOT = exports.ENV_ROOT = envresolve('../'),

    /**
     * Путь до корня проекта
     * @type String
     * @exports PRJ_ROOT
     */
    PRJ_ROOT = exports.PRJ_ROOT = resolve('../'),

    /**
     * Имя директории куда складываем библиотеки
     * @type String
     * @exports LIB_DIR
     */
    LIB_DIR = exports.LIB_DIR = 'vendor',

    /**
     * Путь до корня хранилища библиотек
     *
     * NOTE: путь расчитывается относительно корня окружения `ENV_ROOT`
     * пока нет способа описать зависимости в библиотеках.
     *
     * @type String
     * @exports LIB_ROOT
     */
    LIB_ROOT = exports.LIB_ROOT = join(ENV_ROOT, LIB_DIR),

    /**
     * Имя директории с .bem-конфигами
     * @type String
     * @exports CONF_DIR
     */
    CONF_DIR = exports.CONF_DIR = 'configs',

    /**
     * Путь до директории с .bem-конфигами
     * @type String
     * @exports CONF_ROOT
     */
    CONF_ROOT = exports.CONF_ROOT = resolve(CONF_DIR),

    /**
     * «Текущая» конфигурация
     * @exports getConf
     * @returns {Object}
     */
    getConf = exports.getConf = function() {
        return require(join(CONF_ROOT, 'current'));
    },

    /**
     * Абсолютный путь до библиотеки `lib`
     * @exports getLibPath
     * @param {String} lib id библиотеки
     * @param {String} [...path]
     * @returns {String}
     */
    getLibPath = exports.getLibPath = function() {
        var args = [].splice.call(arguments, 0);
        return join.apply(null, [LIB_ROOT].concat(args));
    },

    /**
     * Путь до библиотеки `lib` относительно корня проекта
     * @exports getLibRelPath
     * @param {String} lib id библиотеки
     * @param {String} [...path]
     * @returns {String}
     */
    getLibRelPath = exports.getLibRelPath = function() {
        return relative(PRJ_ROOT, getLibPath.apply(null, arguments));
    };

function getGlobalRoot() {
//    var root = BEM.require('./env').getEnv('__root_level_dir');
    // FIXME: подумать, как обойтись без `env`
    var root = process.env.__root_level_dir;
    if(!root) {
        require('bem/lib/logger').warn('[environ] variable "__root_level_dir" is not set properly');
        root = __dirname;
    }

    return root;
}