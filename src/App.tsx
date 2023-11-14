import { useCallback, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const App = () => {
  const gridRef = useRef<AgGridReact>(null);

  const [rowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }, 
    { make: "Porsche", model: "Boxter", price: 72000 }, 
    { make: "Porsche", model: "Boxter", price: 72000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
  ]);

  const [columnDefs] = useState([
    { field: "make", filter : true },
    { field: "model" },
    { field: "price" }
  ]);

  const onBtnExport = useCallback(() => {
    gridRef.current!.api.exportDataAsCsv();
  }, []);
  
  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <button onClick={onBtnExport}>Download CSV export file</button>
      <AgGridReact                 
        ref={gridRef}
        rowData={rowData} 
        columnDefs={columnDefs}>
      </AgGridReact>
    </div>
  );
};

export default App;
