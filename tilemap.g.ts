// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010001000000000000010000000000000000010101010100000100000001000000000000000000010101010000010001010101010101000002010101000101010001010000010001010101010000000000000000010100010001010100010101010101000100000100010101000100000000010001000001000101010001000000000100010000010001010000010000000001010100000100010100010100000000000000000001000101000100000101000000000000010001010001000001000001000000000100010100010000010000010000000001000200000101000000000100000000010001010101000000000001010101010100`, img`
2 2 2 2 2 2 2 2 . 2 . . . . . . 
2 . . . . . . . . 2 2 2 2 2 . . 
2 . . . 2 . . . . . . . . . 2 2 
2 2 . . 2 . 2 2 2 2 2 2 2 . . . 
2 2 2 . 2 2 2 . 2 2 . . 2 . 2 2 
2 2 2 . . . . . . . . 2 2 . 2 . 
2 2 2 . 2 2 2 2 2 2 . 2 . . 2 . 
2 2 2 . 2 . . . . 2 . 2 . . 2 . 
2 2 2 . 2 . . . . 2 . 2 . . 2 . 
2 2 . . 2 . . . . 2 2 2 . . 2 . 
2 2 . 2 2 . . . . . . . . . 2 . 
2 2 . 2 . . 2 2 . . . . . . 2 . 
2 2 . 2 . . 2 . . 2 . . . . 2 . 
2 2 . 2 . . 2 . . 2 . . . . 2 . 
. . . 2 2 . . . . 2 . . . . 2 . 
2 2 2 2 . . . . . 2 2 2 2 2 2 . 
`, [myTiles.transparency16,sprites.castle.tileDarkGrass2,sprites.builtin.forestTiles0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
