describe("Cell", function() {
  it("should return the initial state", function() {
    var cell = new Cell(1,4);
    expect(cell.getState()).toBe(1);
  });

  it("should die of under population if the neighbour count is less than 2", function() {
    var cell = new Cell(1,1);
    cell.tick();
    expect(cell.getState()).toBe(0);
  });

  it("should die of over population if the neighbour count is more than 3", function() {
    var cell = new Cell(1,4);
    cell.tick();
    expect(cell.getState()).toBe(0);
  });

  it("should stay alive if neighbour count is either 2 or 3", function() {
    var cell1 = new Cell(1,3);
    cell1.tick();
    expect(cell1.getState()).toBe(1);

    var cell2 = new Cell(1,2);
    cell2.tick();
    expect(cell2.getState()).toBe(1);
  });

  it("should turn into a live cell if it has exactly 3 live neighbours", function() {
    var cell = new Cell(0,3);
    cell.tick();
    expect(cell.getState()).toBe(1);
  });

});

describe("Universe", function() {
  it("should initialize with nothing in it", function() {
    var grid = [
      [0,0,0,0,0],
      [0,0,0,0,0],
      [0,0,0,0,0],
      [0,0,0,0,0],
      [0,0,0,0,0]
    ];
    var universe = new Universe(grid);
    expect(universe.getSize()).toBe(0);
  });

});