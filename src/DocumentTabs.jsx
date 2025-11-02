import { Button } from "@mui/material"
import "./DocumentTabs.css"
import { BorderLeft, Margin } from "@mui/icons-material";

const styles={
    tab:{
        display: 'inline-block',
        paddingLeft: 10, paddingRight: 10,borderTop:'2px solid #c8c8c8', borderLeft:'2px solid #c8c8c8', borderRight:'2px solid #c8c8c8', borderTopLeftRadius:5, borderTopRightRadius:5,
    },
    button:{
        borderTop:'2px solid #c8c8c8', borderLeft:'2px solid #c8c8c8', 
        borderRight:'2px solid #c8c8c8', borderTopLeftRadius:5, borderTopRightRadius:5, 
        borderBottomLeftRadius:0, borderBottomRightRadius:0, outline:'none', color:'black', backgroundColor:'#e4e4e4ff'
    }
};

function Tab({text, id, value, onClick}) {
    return(
        <div style={{... styles.tab, backgroundColor:(value == id)?'white':'#e4e4e4ff', textAlign:'center', height:(value == id)?25:undefined}}
            onClick={()=>onClick(id)}>
            {text}
        </div>
    );
};


export default function DocumentTabs({value, onClick}) {
    return (
        <>
            <div class='TabContainer'
            >
               <Tab text="tab 1" id={1} value={value} onClick={onClick}/>
               <Tab text="tab 2" id={2} value={value} onClick={onClick}/>
               <Tab text="tab 3" id={4} value={value} onClick={onClick}/>
               <Button sx={{... styles.button, minWidth:25}}>
                +
                </Button>
                
            </div>
        
        </>
    )
}