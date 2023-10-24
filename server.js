const express = require('express')
const app=express()
const cors=require('cors')
const PORT = process.env.PORT || 4000

app.use(cors())
const characters= {
    'Gojo':{
        'name':'Satoru Gojo',
        'equipment':'Slaughter Demon',
        'ability':('Limitless','Infinity','Blue','Red','Purple')
    },

    'Yuji':{
        'name':'Yuji Itadori',
        'equipment':'Slaughter Demon',
        'ability':'Black Flash'
    },
    'Megumi':{
        'name':'Megumi Fushiguro',
        'equipment':'Jet Black Sword',
        'ability':'Shikigami Shadows'
    },
    'Nobara':{
        'name':'Nobara Kugisaki',
        'equipment':('Hammer','Nails','Straw Doll'),
        'ability':('Resonance','Straw Doll Technique','Hair Pin')
    },
    'Maki':{
        'name':'Maki Zenin',
        'equipment':'Naginata',
        'ability':'Cursed Tool Usage'
    },
    'Toge':{
        'name':'Toge Inumaki',
        'equipment':'Cough Syrup',
        'ability':'Cursed Speech'
    },
    'Panda':{
        'name':'Panda',
        'equipment':'Knuckle Bracers',
        'ability':'Cursed Corpse Modes'
    },
    'Yuta':{
        'name':'Yuta Okkotsu',
        'equipment':'Katana',
        'ability':'Rika'
    },
    'Mai':{
        'name':'Mai Zenin',
        'equipment':'Revolver',
        'ability':'Construction'
    },
    'Todo':{
        'name':'Aoi Todo',
        'equipment':'Playful Cloud',
        'ability':'Boogie Woogie'
    },
    'Noritoshi':{
        'name':'Noritoshi Kamo',
        'equipment':'Bow and Arrows',
        'ability':'Blood Manipulation'
    },
    'Momo':{
        'name':'Momo Nishimiya',
        'equipment':'Straw Broom',
        'ability':'Wind Scythe'
    },
    'Nanami':{
        'name':'Kento Nanami',
        'equipment':'Blunt Sword',
        'ability':('Ratio Technique',
                    'Overtime')
    },
    'Ino':{
        'name':'Takuma Ino',
        'equipment':'Mask',
        'ability':'Auspicious Beast Summon'
    },
    'unknown':{
        'name':'unknown',
        'equipment':'unknown',
        'ability':'unknown'
    }

}



app.get('/',(req, res)=>{
    res.sendFile(__dirname + '/index.html')
})
app.get('/api',(req,res)=>{
        res.json(characters)
})
app.get('/api/:name',(req,res)=>{
    const characterName=req.params.name.toLowerCase()
    if(characters[characterName]){
        res.json(characters[characterName])
    }else{
        res.json(characters['unknown'])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}!`)
})