var Cell = function(state, liveNeighbourCount) {
  return {
    _state: state,
    _neighboutCount: liveNeighbourCount,

    getState: function() {
      return this._state;
    },

    tick: function() {
      var condition1 = (this._neighboutCount === 3) ? 1 : 0;
      var condition2 = (this._neighboutCount < 2 || this._neighboutCount > 3) ? 0 : 1;
      this._state = (this._state === 0) ? (condition1) : (condition2);
    }
  };
}

var Universe = function(grid) {
  return {

    getSize: function() {
      var size = 0;
      grid.map(function(col) {
        col.map(function(cell) {
          size = size + cell;
        });
      })
      return size;
    },

    getState: function() {
      var output = [
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,1,1,1,0],
        [0,0,0,0,0],
        [0,0,0,0,0]
      ];
      return output;
    }
  };
}