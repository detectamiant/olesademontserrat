var wms_layers = [];

var lyr_STOrtofotocolor2020_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "ortofoto_color_2020",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "[ST] Ortofoto color [2020]",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_STOrtofotocolor2020_0, 0]);
var format_PositiusOlesaIpositius_olesa_1 = new ol.format.GeoJSON();
var features_PositiusOlesaIpositius_olesa_1 = format_PositiusOlesaIpositius_olesa_1.readFeatures(json_PositiusOlesaIpositius_olesa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PositiusOlesaIpositius_olesa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PositiusOlesaIpositius_olesa_1.addFeatures(features_PositiusOlesaIpositius_olesa_1);
var lyr_PositiusOlesaIpositius_olesa_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PositiusOlesaIpositius_olesa_1, 
                style: style_PositiusOlesaIpositius_olesa_1,
                interactive: true,
                title: '<img src="styles/legend/PositiusOlesaIpositius_olesa_1.png" /> Positius Olesa I — positius_olesa '
            });
var format_PositiusOlesaIIpositius_olesa_ii_2 = new ol.format.GeoJSON();
var features_PositiusOlesaIIpositius_olesa_ii_2 = format_PositiusOlesaIIpositius_olesa_ii_2.readFeatures(json_PositiusOlesaIIpositius_olesa_ii_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PositiusOlesaIIpositius_olesa_ii_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PositiusOlesaIIpositius_olesa_ii_2.addFeatures(features_PositiusOlesaIIpositius_olesa_ii_2);
var lyr_PositiusOlesaIIpositius_olesa_ii_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PositiusOlesaIIpositius_olesa_ii_2, 
                style: style_PositiusOlesaIIpositius_olesa_ii_2,
                interactive: true,
                title: '<img src="styles/legend/PositiusOlesaIIpositius_olesa_ii_2.png" /> Positius Olesa II — positius_olesa_ii'
            });
var format_PositiusOlesaIIIpositius_olesa_iii_3 = new ol.format.GeoJSON();
var features_PositiusOlesaIIIpositius_olesa_iii_3 = format_PositiusOlesaIIIpositius_olesa_iii_3.readFeatures(json_PositiusOlesaIIIpositius_olesa_iii_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PositiusOlesaIIIpositius_olesa_iii_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PositiusOlesaIIIpositius_olesa_iii_3.addFeatures(features_PositiusOlesaIIIpositius_olesa_iii_3);
var lyr_PositiusOlesaIIIpositius_olesa_iii_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PositiusOlesaIIIpositius_olesa_iii_3, 
                style: style_PositiusOlesaIIIpositius_olesa_iii_3,
                interactive: true,
                title: '<img src="styles/legend/PositiusOlesaIIIpositius_olesa_iii_3.png" /> Positius Olesa III — positius_olesa_iii'
            });
var group_Mapasdefondo = new ol.layer.Group({
                                layers: [lyr_STOrtofotocolor2020_0,],
                                title: "Mapas de fondo"});

lyr_STOrtofotocolor2020_0.setVisible(true);lyr_PositiusOlesaIpositius_olesa_1.setVisible(true);lyr_PositiusOlesaIIpositius_olesa_ii_2.setVisible(true);lyr_PositiusOlesaIIIpositius_olesa_iii_3.setVisible(true);
var layersList = [group_Mapasdefondo,lyr_PositiusOlesaIpositius_olesa_1,lyr_PositiusOlesaIIpositius_olesa_ii_2,lyr_PositiusOlesaIIIpositius_olesa_iii_3];
lyr_PositiusOlesaIpositius_olesa_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'área': 'área', });
lyr_PositiusOlesaIIpositius_olesa_ii_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'area': 'area', });
lyr_PositiusOlesaIIIpositius_olesa_iii_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'area': 'area', });
lyr_PositiusOlesaIpositius_olesa_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'área': 'TextEdit', });
lyr_PositiusOlesaIIpositius_olesa_ii_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'area': 'TextEdit', });
lyr_PositiusOlesaIIIpositius_olesa_iii_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'area': 'TextEdit', });
lyr_PositiusOlesaIpositius_olesa_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'área': 'no label', });
lyr_PositiusOlesaIIpositius_olesa_ii_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'area': 'no label', });
lyr_PositiusOlesaIIIpositius_olesa_iii_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'area': 'no label', });
lyr_PositiusOlesaIIIpositius_olesa_iii_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});