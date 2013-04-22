/**
 * Author: Ken
 * Date: 22/04/2013
 * Time: 13:06
 */
define(['../javascripts/lib/jsonp.js',
        '../javascripts/Constant.js'],function(JSONP,CONSTANT) {
    return Loader;
});
/**
 * Load Data from /data/employees.json
 * @constructor
 */
function Loader() {

    var self = this;

    /**
     * load data from Flickr API
     * @param options {keywords:String,page:Number} tell Flickr how to load data
     * @param successCallback (data) data : {photos: Object, stat: "ok"}
     * @param errorCallback {err} {stat: "fail",message:String}
     */
    self.loadData = function (options, successCallback, errorCallback) {
        if (!options){
            if (errorCallback && typeof errorCallback === 'function') {
                errorCallback(CONSTANT.ERROR.LOAD_DATA.LACK_OPTION);
            }else{
                throw CONSTANT.ERROR.LOAD_DATA.LACK_OPTION;
            }
        }

        var page = options.page ? options.page : CONSTANT.FLICKR.PAGE;
        var keywords = options.keywords ? options.keywords : CONSTANT.SEARCH.DEFAULT_TEXT;

        JSONP.init({
                callbackName: 'jsoncallback'
        });
        JSONP.get(CONSTANT.FLICKR.SEARCH_PHOTO,
            {
                method:CONSTANT.FLICKR.METHOD,
                text:keywords,
                page :page,
                per_page:CONSTANT.FLICKR.PER_PAGE,
                format:CONSTANT.FLICKR.FORMAT,
                api_key:CONSTANT.FLICKR.KEY
            },callback
        );

        function callback(data){
            if (data && data.stat == 'ok'){
                if (successCallback && typeof successCallback === 'function'){
                    successCallback(data);
                }
            }else{
                if (errorCallback && typeof errorCallback === 'function') {
                    errorCallback(data);
                }else{
                    if (data && data.message){
                        throw data.message;
                    }else{
                        throw CONSTANT.ERROR.FLICKR;
                    }
                }
            }
        }
    }

}