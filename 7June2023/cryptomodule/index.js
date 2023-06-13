// var crypto = require('crypto');

// // var mykey = crypto.createCipher('aes-128-cbc', 'password');
// // var mystr = mykey.update('digitallync', 'utf8', 'hex')
// // mystr += mykey.final('hex');

// // console.log(mystr);

// var mykey = crypto.createDecipher('aes-128-cbc', 'password');
// var mystr = mykey.update('ed43e6adee21c67678fca083fcafeb54', 'hex', 'utf8')
// mystr += mykey.final('utf8');

// console.log(mystr);
// //ed43e6adee21c67678fca083fcafeb54 - digitallyc  (password)


var url = require('url');
var flipkartUrl = "https://www.flipkart.com/computers/monitors/pr?sid=6bo%2C9no&fm=neo%2Fmerchandising&iid=M_ce1a6f68-d7d2-4ae1-875c-0d0877d9a11f_2_372UD5BXDFYS_MC.ECL5SFI77NSY&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L2_view-all&cid=ECL5SFI77NSY&p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&p%5B%5D=facets.brand%255B%255D%3DLenovo&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTc5NDkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJNb25pdG9ycyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6Ik1PTkdGWjlSV1o1RUhIV1giLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&fm=neo%2Fmerchandising&iid=M_d20be3a2-3449-46b2-9a86-8f03cdbdfbc2_3.ZIEW022R2RTS&ppt=clp&ppn=big-savings-days-store&ssid=nn779ogbvk0000001686121201807&otracker=hp_omu_Best%2Bof%2BElectronics_3_3.dealCard.OMU_ZIEW022R2RTS_3&otracker1=hp_omu_PINNED_neo%2Fmerchandising_Best%2Bof%2BElectronics_NA_dealCard_cc_3_NA_view-all_3&cid=ZIEW022R2RTS";
var parsedUrl = url.parse(flipkartUrl, true);
var obj = parsedUrl.query;
var keys = Object.keys(obj);
console.log("keys", keys);

keys.forEach(function (key) {
    console.log(key + " " + obj[key]);
})




