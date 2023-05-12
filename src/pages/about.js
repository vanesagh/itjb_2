import PageDescription from "@/components/PageDescription";
import { Grid, Button, Chip, Stack } from "@mui/material";
import { useRouter } from 'next/router'

export default function AboutPage({skills}) {
    const router = useRouter();
    return (
        <section>
            <PageDescription title="About me" description="Here you will find some info about my career"/>
            <Grid container spacing={2}>
            <Grid item md={6}>
                <h2>Get to know me!</h2>
                <p>I&aposm a mechanical electrical engineer who likes to code</p>
                <Button variant='contained' size='large' onClick={()=> router.push("/contact")}>Contact</Button>
            </Grid>
            <Grid item md={6}>
                <h2>Skills</h2>
                <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
                {skills.map((skill) => (<Chip key={skill} label={skill}/>))}
                </Stack>
            </Grid>
            


        </Grid>
        </section>
        
    );
}

export async function getStaticProps(){
    let skills = [];
    try {
        const response= await fetch('https://my-skills-api-f77a7-default-rtdb.firebaseio.com/skills.json')
        const data = await response.json();
        skills = data.split(",")
    } catch (error) {
        console.error(error);
        
    }
    return {
        props:{
            skills,
        },
        revalidate:30,
    };
}