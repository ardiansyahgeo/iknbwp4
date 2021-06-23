var size = 0;
var placement = 'point';
function categories_ZPK_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'ZPK 1 Lahan Sesuai (Zona Prioritas pengembangan perkotaan)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(55,196,114,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ZPK 2 Lahan Cukup Sesuai (Zona Pengembangan Perkotaan Bersyarat)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(233,235,113,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ZPK 3 Lahan Kurang Sesuai (Zona Prioritas Pengembangan Perkotaan scr Terbatas)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(253,199,111,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ZPK 4 Tidak Sesuai (Zona Lindung dan Penyangga Perkotaan)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(229,15,76,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_ZPK_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("MCA");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_ZPK_2(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
