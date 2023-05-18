import PageDescription from "@/components/PageDescription";

import { Box, Grid, Button, Chip } from "@mui/material";

function Project({project}){
    return (
    <>
      <Grid 
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        rowGap={2}

      >
        <PageDescription 
          title={project.name}
          description={project.description}
        />
        <Box textAlign="center">
            <Button variant="contained">
                Project Link
            </Button>
        </Box>
        <Box>
            <img src={project.imageUrl} alt="sd"/>
        </Box>
        <h1> Project Overview</h1>
        <Box>
            <span>{project.description}</span>
        </Box>
        <h1>Tools used</h1>
        <Box sx={{display:"flex", flexWrap:"wrap", gap:1}}>
            {project.tools.map((tool)=>(
                <Chip 
                  key={tool} 
                  label={tool} 
                  variant="outlined"
                />

            ))}
        </Box>
      </Grid>
    </>
    );
}
export async function getServerSideProps(context){
    const id = context.params.id;
    try {
        const response = await fetch("http://localhost:3000/api/projects/"+id);
        const project = await response.json();
        return{
            props:{
                project
            }
        }
        
    } catch (error) {
        console.error(error);
        
    }
}
export default Project;