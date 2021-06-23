var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_google_1 = new ol.layer.Tile({
            'title': 'google',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ZPK_2 = new ol.format.GeoJSON();
var features_ZPK_2 = format_ZPK_2.readFeatures(json_ZPK_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZPK_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZPK_2.addFeatures(features_ZPK_2);
var lyr_ZPK_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZPK_2, 
                style: style_ZPK_2,
                interactive: true,
    title: 'ZPK<br />\
    <img src="styles/legend/ZPK_2_0.png" /> ZPK 1 Lahan Sesuai (Zona Prioritas pengembangan perkotaan)<br />\
    <img src="styles/legend/ZPK_2_1.png" /> ZPK 2 Lahan Cukup Sesuai (Zona Pengembangan Perkotaan Bersyarat)<br />\
    <img src="styles/legend/ZPK_2_2.png" /> ZPK 3 Lahan Kurang Sesuai (Zona Prioritas Pengembangan Perkotaan scr Terbatas)<br />\
    <img src="styles/legend/ZPK_2_3.png" /> ZPK 4 Tidak Sesuai (Zona Lindung dan Penyangga Perkotaan)<br />'
        });
var format_rencana_sistem_perkotaan_3 = new ol.format.GeoJSON();
var features_rencana_sistem_perkotaan_3 = format_rencana_sistem_perkotaan_3.readFeatures(json_rencana_sistem_perkotaan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rencana_sistem_perkotaan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rencana_sistem_perkotaan_3.addFeatures(features_rencana_sistem_perkotaan_3);
var lyr_rencana_sistem_perkotaan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rencana_sistem_perkotaan_3, 
                style: style_rencana_sistem_perkotaan_3,
                interactive: true,
    title: 'rencana_sistem_perkotaan<br />\
    <img src="styles/legend/rencana_sistem_perkotaan_3_0.png" /> Pusat Pelayanan Kota<br />\
    <img src="styles/legend/rencana_sistem_perkotaan_3_1.png" /> Sub Pusat Pelayanan Kota<br />'
        });
var format_BUDIDAYA_4 = new ol.format.GeoJSON();
var features_BUDIDAYA_4 = format_BUDIDAYA_4.readFeatures(json_BUDIDAYA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUDIDAYA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUDIDAYA_4.addFeatures(features_BUDIDAYA_4);
var lyr_BUDIDAYA_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BUDIDAYA_4, 
                style: style_BUDIDAYA_4,
                interactive: true,
    title: 'BUDIDAYA<br />\
    <img src="styles/legend/BUDIDAYA_4_0.png" /> Badan Air<br />\
    <img src="styles/legend/BUDIDAYA_4_1.png" /> Kawasan Campuran<br />\
    <img src="styles/legend/BUDIDAYA_4_2.png" /> Kawasan Fasilitas Umum dan Fasilitas Sosial<br />\
    <img src="styles/legend/BUDIDAYA_4_3.png" /> Kawasan Hutan Produksi Tetap<br />\
    <img src="styles/legend/BUDIDAYA_4_4.png" /> Kawasan Infrastruktur Perkotaan<br />\
    <img src="styles/legend/BUDIDAYA_4_5.png" /> Kawasan Pariwisata<br />\
    <img src="styles/legend/BUDIDAYA_4_6.png" /> Kawasan Perdagangan dan Jasa<br />\
    <img src="styles/legend/BUDIDAYA_4_7.png" /> Kawasan Perkantoran<br />\
    <img src="styles/legend/BUDIDAYA_4_8.png" /> Kawasan Perkebunan<br />\
    <img src="styles/legend/BUDIDAYA_4_9.png" /> Kawasan Pertahanan dan Keamanan<br />\
    <img src="styles/legend/BUDIDAYA_4_10.png" /> Kawasan Perumahan<br />\
    <img src="styles/legend/BUDIDAYA_4_11.png" /> Kawasan Tanaman Pangan<br />'
        });
var format_BATAS_KAWASAN_IBUKOTA_5 = new ol.format.GeoJSON();
var features_BATAS_KAWASAN_IBUKOTA_5 = format_BATAS_KAWASAN_IBUKOTA_5.readFeatures(json_BATAS_KAWASAN_IBUKOTA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATAS_KAWASAN_IBUKOTA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATAS_KAWASAN_IBUKOTA_5.addFeatures(features_BATAS_KAWASAN_IBUKOTA_5);
var lyr_BATAS_KAWASAN_IBUKOTA_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BATAS_KAWASAN_IBUKOTA_5, 
                style: style_BATAS_KAWASAN_IBUKOTA_5,
                interactive: true,
                title: '<img src="styles/legend/BATAS_KAWASAN_IBUKOTA_5.png" /> BATAS_KAWASAN_IBUKOTA'
            });
var format_BWP_RTR_6 = new ol.format.GeoJSON();
var features_BWP_RTR_6 = format_BWP_RTR_6.readFeatures(json_BWP_RTR_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BWP_RTR_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BWP_RTR_6.addFeatures(features_BWP_RTR_6);
var lyr_BWP_RTR_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BWP_RTR_6, 
                style: style_BWP_RTR_6,
                interactive: true,
                title: '<img src="styles/legend/BWP_RTR_6.png" /> BWP_RTR'
            });
var format_JALANRENCANA_7 = new ol.format.GeoJSON();
var features_JALANRENCANA_7 = format_JALANRENCANA_7.readFeatures(json_JALANRENCANA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALANRENCANA_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALANRENCANA_7.addFeatures(features_JALANRENCANA_7);
var lyr_JALANRENCANA_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALANRENCANA_7, 
                style: style_JALANRENCANA_7,
                interactive: true,
    title: 'JALAN (RENCANA)<br />\
    <img src="styles/legend/JALANRENCANA_7_0.png" /> Jalan Arteri Primer<br />\
    <img src="styles/legend/JALANRENCANA_7_1.png" /> Jalan Arteri Sekunder<br />\
    <img src="styles/legend/JALANRENCANA_7_2.png" /> Jalan Khusus<br />\
    <img src="styles/legend/JALANRENCANA_7_3.png" /> Jalan Kolektor Primer<br />\
    <img src="styles/legend/JALANRENCANA_7_4.png" /> Jalan Kolektor Sekunder<br />\
    <img src="styles/legend/JALANRENCANA_7_5.png" /> Jalan Lokal Primer<br />\
    <img src="styles/legend/JALANRENCANA_7_6.png" /> Jalan Tol<br />\
    <img src="styles/legend/JALANRENCANA_7_7.png" /> Jaringan Jalur Kereta Api Antarkota<br />\
    <img src="styles/legend/JALANRENCANA_7_8.png" /> Jaringan Jalur Kereta Api Perkotaan<br />\
    <img src="styles/legend/JALANRENCANA_7_9.png" /> Ruang Udara untuk Penerbangan<br />'
        });
var format_JALANPENGEMBANGANEKSISTING_8 = new ol.format.GeoJSON();
var features_JALANPENGEMBANGANEKSISTING_8 = format_JALANPENGEMBANGANEKSISTING_8.readFeatures(json_JALANPENGEMBANGANEKSISTING_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALANPENGEMBANGANEKSISTING_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALANPENGEMBANGANEKSISTING_8.addFeatures(features_JALANPENGEMBANGANEKSISTING_8);
var lyr_JALANPENGEMBANGANEKSISTING_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALANPENGEMBANGANEKSISTING_8, 
                style: style_JALANPENGEMBANGANEKSISTING_8,
                interactive: true,
    title: 'JALAN (PENGEMBANGAN EKSISTING)<br />\
    <img src="styles/legend/JALANPENGEMBANGANEKSISTING_8_0.png" /> Jalan Arteri Primer<br />\
    <img src="styles/legend/JALANPENGEMBANGANEKSISTING_8_1.png" /> Jalan Arteri Sekunder<br />\
    <img src="styles/legend/JALANPENGEMBANGANEKSISTING_8_2.png" /> Jalan Khusus<br />\
    <img src="styles/legend/JALANPENGEMBANGANEKSISTING_8_3.png" /> Jalan Kolektor Primer<br />\
    <img src="styles/legend/JALANPENGEMBANGANEKSISTING_8_4.png" /> Jalan Kolektor Sekunder<br />\
    <img src="styles/legend/JALANPENGEMBANGANEKSISTING_8_5.png" /> Jalan Lokal Primer<br />\
    <img src="styles/legend/JALANPENGEMBANGANEKSISTING_8_6.png" /> Jalan Tol<br />'
        });
var format_ALTERNATIF_DELINIASI_2_9 = new ol.format.GeoJSON();
var features_ALTERNATIF_DELINIASI_2_9 = format_ALTERNATIF_DELINIASI_2_9.readFeatures(json_ALTERNATIF_DELINIASI_2_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ALTERNATIF_DELINIASI_2_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ALTERNATIF_DELINIASI_2_9.addFeatures(features_ALTERNATIF_DELINIASI_2_9);
var lyr_ALTERNATIF_DELINIASI_2_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ALTERNATIF_DELINIASI_2_9, 
                style: style_ALTERNATIF_DELINIASI_2_9,
                interactive: true,
                title: '<img src="styles/legend/ALTERNATIF_DELINIASI_2_9.png" /> ALTERNATIF_DELINIASI_2'
            });
var format_ALTERNATIF_DELINIASI_1_10 = new ol.format.GeoJSON();
var features_ALTERNATIF_DELINIASI_1_10 = format_ALTERNATIF_DELINIASI_1_10.readFeatures(json_ALTERNATIF_DELINIASI_1_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ALTERNATIF_DELINIASI_1_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ALTERNATIF_DELINIASI_1_10.addFeatures(features_ALTERNATIF_DELINIASI_1_10);
var lyr_ALTERNATIF_DELINIASI_1_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ALTERNATIF_DELINIASI_1_10, 
                style: style_ALTERNATIF_DELINIASI_1_10,
                interactive: true,
                title: '<img src="styles/legend/ALTERNATIF_DELINIASI_1_10.png" /> ALTERNATIF_DELINIASI_1'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_google_1.setVisible(true);lyr_ZPK_2.setVisible(true);lyr_rencana_sistem_perkotaan_3.setVisible(true);lyr_BUDIDAYA_4.setVisible(true);lyr_BATAS_KAWASAN_IBUKOTA_5.setVisible(true);lyr_BWP_RTR_6.setVisible(true);lyr_JALANRENCANA_7.setVisible(true);lyr_JALANPENGEMBANGANEKSISTING_8.setVisible(true);lyr_ALTERNATIF_DELINIASI_2_9.setVisible(true);lyr_ALTERNATIF_DELINIASI_1_10.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_google_1,lyr_ZPK_2,lyr_rencana_sistem_perkotaan_3,lyr_BUDIDAYA_4,lyr_BATAS_KAWASAN_IBUKOTA_5,lyr_BWP_RTR_6,lyr_JALANRENCANA_7,lyr_JALANPENGEMBANGANEKSISTING_8,lyr_ALTERNATIF_DELINIASI_2_9,lyr_ALTERNATIF_DELINIASI_1_10];
lyr_ZPK_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'MCA': 'MCA', 'KODE': 'KODE', 'SUMBER': 'SUMBER', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_rencana_sistem_perkotaan_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'ORDE01': 'ORDE01', 'ORDE02': 'ORDE02', 'ORDE03': 'ORDE03', 'ORDE04': 'ORDE04', 'JNSRSR': 'JNSRSR', 'STSJRN': 'STSJRN', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'SBDATA': 'SBDATA', });
lyr_BUDIDAYA_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'KODKWS': 'KODKWS', 'LUASHA': 'LUASHA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_BATAS_KAWASAN_IBUKOTA_5.set('fieldAliases', {'FID_Batas_': 'FID_Batas_', 'FID_Deline': 'FID_Deline', 'OBJECTID': 'OBJECTID', 'SK_PNJK': 'SK_PNJK', 'TGL_PNJK': 'TGL_PNJK', 'LuasHa': 'LuasHa', 'Keterangan': 'Keterangan', });
lyr_BWP_RTR_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'BWP': 'BWP', 'KETERANGAN': 'KETERANGAN', 'LUAS_HA': 'LUAS_HA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_JALANRENCANA_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'SBDATA': 'SBDATA', 'REMARK': 'REMARK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALANPENGEMBANGANEKSISTING_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'SBDATA': 'SBDATA', 'REMARK': 'REMARK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_ALTERNATIF_DELINIASI_2_9.set('fieldAliases', {'Keterangan': 'Keterangan', 'BWP': 'BWP', 'KETERANG_1': 'KETERANG_1', 'LUAS_HA': 'LUAS_HA', });
lyr_ALTERNATIF_DELINIASI_1_10.set('fieldAliases', {'FID_BWP_MP': 'FID_BWP_MP', 'Keterangan': 'Keterangan', 'BWP': 'BWP', 'KETERANG_1': 'KETERANG_1', 'LUAS_HA': 'LUAS_HA', });
lyr_ZPK_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'MCA': 'TextEdit', 'KODE': 'TextEdit', 'SUMBER': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_rencana_sistem_perkotaan_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'TextEdit', 'ORDE02': 'TextEdit', 'ORDE03': 'TextEdit', 'ORDE04': 'TextEdit', 'JNSRSR': 'TextEdit', 'STSJRN': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_BUDIDAYA_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'KODKWS': 'TextEdit', 'LUASHA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BATAS_KAWASAN_IBUKOTA_5.set('fieldImages', {'FID_Batas_': 'TextEdit', 'FID_Deline': 'TextEdit', 'OBJECTID': 'TextEdit', 'SK_PNJK': 'TextEdit', 'TGL_PNJK': 'DateTime', 'LuasHa': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_BWP_RTR_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'BWP': 'TextEdit', 'KETERANGAN': 'TextEdit', 'LUAS_HA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_JALANRENCANA_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'SBDATA': 'TextEdit', 'REMARK': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_JALANPENGEMBANGANEKSISTING_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'SBDATA': 'TextEdit', 'REMARK': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_ALTERNATIF_DELINIASI_2_9.set('fieldImages', {'Keterangan': 'TextEdit', 'BWP': 'TextEdit', 'KETERANG_1': 'TextEdit', 'LUAS_HA': 'TextEdit', });
lyr_ALTERNATIF_DELINIASI_1_10.set('fieldImages', {'FID_BWP_MP': 'TextEdit', 'Keterangan': 'TextEdit', 'BWP': 'TextEdit', 'KETERANG_1': 'TextEdit', 'LUAS_HA': 'TextEdit', });
lyr_ZPK_2.set('fieldLabels', {'OBJECTID': 'inline label', 'MCA': 'inline label', 'KODE': 'inline label', 'SUMBER': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_rencana_sistem_perkotaan_3.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'ORDE01': 'inline label', 'ORDE02': 'inline label', 'ORDE03': 'inline label', 'ORDE04': 'inline label', 'JNSRSR': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'SBDATA': 'inline label', });
lyr_BUDIDAYA_4.set('fieldLabels', {'NAMOBJ': 'inline label', 'KODKWS': 'inline label', 'LUASHA': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_BATAS_KAWASAN_IBUKOTA_5.set('fieldLabels', {'FID_Batas_': 'inline label', 'FID_Deline': 'inline label', 'OBJECTID': 'inline label', 'SK_PNJK': 'inline label', 'TGL_PNJK': 'inline label', 'LuasHa': 'inline label', 'Keterangan': 'inline label', });
lyr_BWP_RTR_6.set('fieldLabels', {'OBJECTID': 'inline label', 'BWP': 'inline label', 'KETERANGAN': 'inline label', 'LUAS_HA': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_JALANRENCANA_7.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'SBDATA': 'inline label', 'REMARK': 'inline label', 'SHAPE_Leng': 'inline label', });
lyr_JALANPENGEMBANGANEKSISTING_8.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'SBDATA': 'inline label', 'REMARK': 'inline label', 'SHAPE_Leng': 'inline label', });
lyr_ALTERNATIF_DELINIASI_2_9.set('fieldLabels', {'Keterangan': 'inline label', 'BWP': 'inline label', 'KETERANG_1': 'inline label', 'LUAS_HA': 'inline label', });
lyr_ALTERNATIF_DELINIASI_1_10.set('fieldLabels', {'FID_BWP_MP': 'inline label', 'Keterangan': 'inline label', 'BWP': 'inline label', 'KETERANG_1': 'inline label', 'LUAS_HA': 'inline label', });
lyr_ALTERNATIF_DELINIASI_1_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});