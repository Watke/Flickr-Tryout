/**
 * Author: Ken
 * Date: 22/04/2013
 * Time: 13:54
 */
define(function(){
    return CONSTANT = {
        ERROR : {
            LOAD_DATA : {
              LACK_OPTION : 'no option'
            },
            FLICKR : 'Flickr failed - reaosn unknown',
            PHOTOS : {
                NO_PHOTOS : 'no photos passing'
            },
            PHOTO : {
                NO_CONTEXT : 'no canvas context',
                NO_IMAGE : 'no image specified'
            }
        },
        FLICKR : {
            SEARCH_PHOTO : 'http://api.flickr.com/services/rest/',
            METHOD:'flickr.photos.search',
            PER_PAGE:'5',
            FORMAT:'json',
            KEY : '91ddbec77138c1df09d74c15f6236652',
            PAGE : 1,
            MEDIUM_SIZE : '_m.jpg',
            LARGE_SIZE : '_c.jpg'

        },
        SEARCH : {
            DEFAULT_TEXT : 'cat'
        },
        CANVAS : {
            WIDTH_PADDING : 50,
            HEIGHT_PADDING : 50,
            X : 25,
            Y : 25
        },
        OTHER : {
            // match URL for testing purpose
            URL : /http[s]?:\/\/([a-z|0-9]+[\\.])+[a-z|0-9]{2,9}([/|a-z|0-9-*.*?_=%&])*/gmi
        }
    }
});