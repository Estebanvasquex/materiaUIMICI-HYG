import { useState } from "react";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import {
  MenuItem, 
  Select,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Button,
  Table,
  TableContainer,
  TableHead,
  TableBody,  
  TableRow,
  TableCell,
  TablePagination,
} from "@mui/material";
import './BusquedaProcesoNAC.css';


export const BusquedaProcesoNAC = () => {
  const [selectedYear, setSelectedYear] = useState("");


  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearch = () => {
    // Lógica para realizar la búsqueda
    console.log("Realizar búsqueda");
    // Actualizar los resultados de la tabla en función de la búsqueda
  };

  const handleCalculateNAC = () => {
    // Lógica para calcular el NAC
    console.log("Calcular NAC");
  };

  const handleNewSimulation = () => {
    // Lógica para iniciar una nueva simulación
    console.log("Nueva simulación");
  };

  // Resultados simulados para la tabla (puedes reemplazar esto con los datos reales de tu búsqueda)
  const results = [
    { id: 1, anio: "Resultado 1", Trimestre: "Detalles 1", tipo: "Detalles 1", fecha: "Detalles 1", propietario: "Detalles 1", estado: "Detalles 1", acciones: "Detalles 1" },
    { id: 2, anio: "Resultado 2", Trimestre: "Detalles 2", tipo: "Detalles 2", fecha: "Detalles 2", propietario: "Detalles 2", estado: "Detalles 2", acciones: "Detalles 2" },
    { id: 3, anio: "Resultado 3", Trimestre: "Detalles 3", tipo: "Detalles 3", fecha: "Detalles 3", propietario: "Detalles 3", estado: "Detalles 3", acciones: "Detalles 3" },
    { id: 4, anio: "Resultado 4", Trimestre: "Detalles 4", tipo: "Detalles 4", fecha: "Detalles 4", propietario: "Detalles 4", estado: "Detalles 4", acciones: "Detalles 4" },
    {id: 5, anio: "Resultado 5", Trimestre: "Detalles 5", tipo: "Detalles 5", fecha: "Detalles 5", propietario: "Detalles 5", estado: "Detalles 5", acciones: "Detalles 5" },
    { id: 6, anio: "Resultado 6", Trimestre: "Detalles 6", tipo: "Detalles 6", fecha: "Detalles 6", propietario: "Detalles 6", estado: "Detalles 6", acciones: "Detalles 6" },
    { id: 7, anio: "Resultado 7", Trimestre: "Detalles 7", tipo: "Detalles 7", fecha: "Detalles 7", propietario: "Detalles 7", estado: "Detalles 7", acciones: "Detalles 7" },


    // ... más resultados
  ];

  return (
    <div className="cardContainer roboto-thin">
      <Card className="cardContent">
        <CardHeader title="Búsqueda de Proceso NAC" className="cardHeaderTitle"  />
        <CardContent>
          <Grid container spacing={2}>
            {/* Primera fila */}
           

              <Grid item xs={4} style={{display: 'flex', flexDirection: 'column'}}>  
              <label htmlFor="" className="label-form">Año</label>
                  <Select
                  labelId="year-label"
                  id="year"
                  value={selectedYear}
                  
                  className="custom-select"
                  type="medium"
                  TableCellype='medium'
                  sx={{borderRadius:'17px', height: '34px'}}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  
                >
                  <MenuItem value="2022">2022</MenuItem>
                  <MenuItem value="2023">2023</MenuItem>
                  {/* Agrega más años según sea necesario */}
                </Select>
                </Grid>

                <Grid item xs={4} style={{display: 'flex', flexDirection: 'column'}}>  
              <label htmlFor="" className="label-form">Trimestre</label>
                  <Select
                  labelId="year-label"
                  id="year"
                  value={selectedYear}
                  
                  className="custom-select"
                  type="medium"
                  TableCellype='medium'
                  sx={{borderRadius:'17px', height: '34px'}}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  
                >
                  <MenuItem value="2022">2022</MenuItem>
                  <MenuItem value="2023">2023</MenuItem>
                  {/* Agrega más años según sea necesario */}
                </Select>
                </Grid>

                <Grid item xs={4} style={{display: 'flex', flexDirection: 'column'}}>  
              <label htmlFor="" className="label-form">Usuario</label>
                  <Select
                  labelId="year-label"
                  id="year"
                  value={selectedYear}
                  
                  className="custom-select"
                  type="medium"
                  TableCellype='medium'
                  sx={{borderRadius:'17px', height: '34px'}}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  
                >
                  <MenuItem value="2022">2022</MenuItem>
                  <MenuItem value="2023">2023</MenuItem>
                  {/* Agrega más años según sea necesario */}
                </Select>
                </Grid>

                <Grid item xs={4} style={{display: 'flex', flexDirection: 'column'}}>  
              <label htmlFor="" className="label-form">Tipo de proceso</label>
                  <Select
                  labelId="year-label"
                  id="year"
                  value={selectedYear}
                  
                  className="custom-select"
                  type="medium"
                  TableCellype='medium'
                  sx={{borderRadius:'17px', height: '34px'}}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  
                >
                  <MenuItem value="2022">2022</MenuItem>
                  <MenuItem value="2023">2023</MenuItem>
                  {/* Agrega más años según sea necesario */}
                </Select>
                </Grid>

                <Grid item xs={8} style={{display: 'flex', flexDirection: 'row', columnGap:'10px', alignItems: 'end', justifyContent:'flex-end'}}>  

                <Button sx={{borderRadius:'17px', height: '34px', color: 'white'}}  className="btn-buscar" color="info">Buscar</Button>
                <Button sx={{borderRadius:'17px', height: '34px'}} variant="outlined" >Nuevo Cálculo NAC</Button>
                <Button sx={{borderRadius:'17px', height: '34px'}} variant="outlined" endIcon={<PlaylistAddIcon />}>Nuevo Simulación</Button>

                </Grid>




            </Grid>
  




            
        

          {/* Tabla de resultados con paginación */}
          <TableContainer sx={{marginTop:'30px'}}>
            <Table>
              <TableHead >
                <TableRow >
                  <TableCell sx={{ textAlign:'center', fontSize:'10.3px', padding: '10px'}}>Id Proceso</TableCell>
                  <TableCell sx={{ textAlign:'center', fontSize:'10.3px', padding: '10px'}}>Año</TableCell>
                  <TableCell sx={{ textAlign:'center', fontSize:'10.3px', padding: '10px'}}>Trimestre</TableCell>
                  <TableCell sx={{ textAlign:'center', fontSize:'10.3px', padding: '10px'}}>Tipo Proceso</TableCell>
                  <TableCell sx={{ textAlign:'center', fontSize:'10.3px', padding: '10px'}}>Fecha Proceso</TableCell>
                  <TableCell sx={{ textAlign:'center', fontSize:'10.3px', padding: '10px'}}>Propietario Proceso</TableCell>
                  <TableCell sx={{ textAlign:'center', fontSize:'10.3px', padding: '10px'}}>Estado Proceso</TableCell>
                  <TableCell sx={{ textAlign:'center', fontSize:'10.3px', padding: '10px'}}>Ver Detalles</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? results.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : results
                ).map((result) => (
                  <TableRow key={result.id}>
                    <TableCell sx={{ textAlign:'center', fontSize:'10.3px', padding: '10px'}} >{result.id}</TableCell>
                    <TableCell sx={{ textAlign:'center', fontSize:'10.3px', padding: '10px'}}>{result.anio}</TableCell>
                    <TableCell sx={{ textAlign:'center', fontSize:'10.3px', padding: '10px'}}>{result.Trimestre}</TableCell>
                    <TableCell sx={{ textAlign:'center', fontSize:'10.3px', padding: '10px'}}>{result.tipo}</TableCell>
                    <TableCell sx={{ textAlign:'center', fontSize:'10.3px', padding: '10px'}}>{result.fecha}</TableCell>
                    <TableCell sx={{ textAlign:'center', fontSize:'10.3px', padding: '10px'}}>{result.propietario}</TableCell>
                    <TableCell sx={{ textAlign:'center', fontSize:'10.3px', padding: '10px'}}>{result.estado}</TableCell>
                    <TableCell sx={{ textAlign:'center', fontSize:'10.3px', padding: '10px'}}>{result.acciones}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Paginación */}
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={results.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </CardContent>
      </Card>
    </div>
  );
};
