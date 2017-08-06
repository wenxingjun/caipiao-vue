
import app from '../app'
const [levels, level] = [{
        DEBUG: 1,
        INFO: 2,
        WARN: 3,
        ERROR: 4,
        FATAL: 5
    }, ()=> app.Config && app.Config.isDebug?levels.DEBUG:levels.ERROR];

export default {
  	log(logObject, logLevel) {
        if (!window.console || !window.console.log) {
            return;
        }
        if (logLevel != undefined && logLevel < level()) {
            return;
        }
        console.log(logObject);
    },

	debug(logObject){
        this.log("DEBUG: ", levels.DEBUG);
        this.log(logObject, levels.DEBUG);
	},

	info(logObject){
        this.log("INFO: ", logObject);
        this.log(logObject, levels.INFO);
	},

	warn(logObject){
        this.log("WARN: ", logObject);
        this.log(logObject, levels.WARN);
	},

	error(logObject){
        this.log("ERROR: ", logObject);
        this.log(logObject, levels.ERROR);
	},

	fatal(logObject){
        this.log("FATAL: ", logObject);
        this.log(logObject, levels.FATAL);
	}
}
