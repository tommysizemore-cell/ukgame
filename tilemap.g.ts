// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`30000800010101010103030301010101010101010101010101010103030301010101010101010101010101010101010101010101010101010103030301010101010101010101010101010103030301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010201010101020101010101010101010202010101010101010201010101010201010101010101010101010101020101010201010101020101010101010102010101010101010101010201010101010201010101020101040405050504040404040405050505040404050505040404040404040404050504040404040504040404040504040505040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404`, img`
................................................
................................................
................................................
................................................
..........2....2.........22.......2.....2.......
......2...2....2.......2..........2.....2....2..
..222......2222...222.........22.....2.....2..22
................................................
`, [myTiles.transparency16,myTiles.tile5,sprites.dungeon.floorLight0,myTiles.tile6,sprites.dungeon.hazardLava0,sprites.builtin.brick], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "baseTransparency16":
            case "transparency16":return transparency16;
            case "myTile5":
            case "tile1":return tile1;
            case "myTile6":
            case "tile2":return tile2;
            case "myTile7":
            case "tile3":return tile3;
            case "myTile8":
            case "tile4":return tile4;
            case "myTile":
            case "tile5":return tile5;
            case "myTile0":
            case "tile6":return tile6;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
