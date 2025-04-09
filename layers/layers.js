var wms_layers = [];


        var lyr_GoogleTerrainHybrid_0 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_Kerletek_1 = new ol.format.GeoJSON();
var features_Kerletek_1 = format_Kerletek_1.readFeatures(json_Kerletek_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kerletek_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kerletek_1.addFeatures(features_Kerletek_1);
var lyr_Kerletek_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kerletek_1, 
                style: style_Kerletek_1,
                popuplayertitle: 'Kerületek',
                interactive: true,
    title: 'Kerületek<br />\
    <img src="styles/legend/Kerletek_1_0.png" /> Baranyi Krisztinával Ferencvárosért Egyesület<br />\
    <img src="styles/legend/Kerletek_1_1.png" /> Borbély Lénárd Csapata<br />\
    <img src="styles/legend/Kerletek_1_2.png" /> Fidesz-KDNP<br />\
    <img src="styles/legend/Kerletek_1_3.png" /> Fidesz–KDNP<br />\
    <img src="styles/legend/Kerletek_1_4.png" /> független<br />\
    <img src="styles/legend/Kerletek_1_5.png" /> MKKP<br />\
    <img src="styles/legend/Kerletek_1_6.png" /> Momentum<br />\
    <img src="styles/legend/Kerletek_1_7.png" /> Momentum-DK-Jobbik-MSZP-Párbeszéd-LMP<br />\
    <img src="styles/legend/Kerletek_1_8.png" /> Momentum-DK-MSZP-Párbeszéd-LMP<br />\
    <img src="styles/legend/Kerletek_1_9.png" /> Momentum-DK-MSZP-Párbeszéd-LMP-Jobbik<br />\
    <img src="styles/legend/Kerletek_1_10.png" /> <br />' });
var format_Budapest_2 = new ol.format.GeoJSON();
var features_Budapest_2 = format_Budapest_2.readFeatures(json_Budapest_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Budapest_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Budapest_2.addFeatures(features_Budapest_2);
var lyr_Budapest_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Budapest_2, 
                style: style_Budapest_2,
                popuplayertitle: 'Budapest',
                interactive: true,
                title: '<img src="styles/legend/Budapest_2.png" /> Budapest'
            });

lyr_GoogleTerrainHybrid_0.setVisible(true);lyr_Kerletek_1.setVisible(true);lyr_Budapest_2.setVisible(true);
var layersList = [lyr_GoogleTerrainHybrid_0,lyr_Kerletek_1,lyr_Budapest_2];
lyr_Kerletek_1.set('fieldAliases', {'Szám': 'Szám', 'ADMIN_LEVE': 'ADMIN_LEVE', 'Címer': 'Címer', 'Városrés': 'Városrés', 'Városrés_1': 'Városrés_1', 'Polg.mest': 'Polg.mest', 'Párt': 'Párt', 'Népesség': 'Népesség', 'Ter. km2': 'Ter. km2', 'Népsűr.': 'Népsűr.', 'Alapítva': 'Alapítva', 'ker': 'ker', });
lyr_Budapest_2.set('fieldAliases', {'Szám': 'Szám', 'ADMIN_LEVE': 'ADMIN_LEVE', 'Címer': 'Címer', 'Városrés': 'Városrés', 'Városrés_1': 'Városrés_1', 'Polg.mest': 'Polg.mest', 'Párt': 'Párt', 'Ter (km2)': 'Ter (km2)', 'Népesség': 'Népesség', 'Népsűr.': 'Népsűr.', 'Alapítva': 'Alapítva', 'ker': 'ker', });
lyr_Kerletek_1.set('fieldImages', {'Szám': 'TextEdit', 'ADMIN_LEVE': 'TextEdit', 'Címer': 'ExternalResource', 'Városrés': 'TextEdit', 'Városrés_1': 'TextEdit', 'Polg.mest': 'TextEdit', 'Párt': 'TextEdit', 'Népesség': 'TextEdit', 'Ter. km2': 'TextEdit', 'Népsűr.': 'TextEdit', 'Alapítva': 'TextEdit', 'ker': 'TextEdit', });
lyr_Budapest_2.set('fieldImages', {'Szám': 'TextEdit', 'ADMIN_LEVE': 'TextEdit', 'Címer': 'ExternalResource', 'Városrés': 'TextEdit', 'Városrés_1': 'TextEdit', 'Polg.mest': 'TextEdit', 'Párt': 'TextEdit', 'Ter (km2)': 'TextEdit', 'Népesség': 'TextEdit', 'Népsűr.': 'TextEdit', 'Alapítva': 'TextEdit', 'ker': 'TextEdit', });
lyr_Kerletek_1.set('fieldLabels', {'Szám': 'inline label - always visible', 'ADMIN_LEVE': 'hidden field', 'Címer': 'inline label - always visible', 'Városrés': 'inline label - always visible', 'Városrés_1': 'inline label - always visible', 'Polg.mest': 'inline label - always visible', 'Párt': 'inline label - always visible', 'Népesség': 'inline label - always visible', 'Ter. km2': 'inline label - always visible', 'Népsűr.': 'inline label - always visible', 'Alapítva': 'inline label - always visible', 'ker': 'hidden field', });
lyr_Budapest_2.set('fieldLabels', {'Szám': 'hidden field', 'ADMIN_LEVE': 'hidden field', 'Címer': 'hidden field', 'Városrés': 'hidden field', 'Városrés_1': 'hidden field', 'Polg.mest': 'hidden field', 'Párt': 'hidden field', 'Ter (km2)': 'hidden field', 'Népesség': 'hidden field', 'Népsűr.': 'hidden field', 'Alapítva': 'hidden field', 'ker': 'hidden field', });
lyr_Budapest_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});