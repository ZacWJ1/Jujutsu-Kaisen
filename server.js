const express = require('express')
const app=express()
const cors=require('cors')
const PORT = process.env.PORT || 4000

app.use(cors())
const characters= {
    'gojo':{
        'name':'Satoru Gojo',
        'equipment':'Slaughter Demon',
        'ability':'Limitless'//,'Infinity','Blue','Red','Purple')
    },

    'yuji':{
        'name':'Yuji Itadori',
        'equipment':'Slaughter Demon',
        'ability':'Black Flash'
    },
    'megumi':{
        'name':'Megumi Fushiguro',
        'equipment':'Jet Black Sword',
        'ability':'Shikigami Shadows'
    },
    'nobara':{
        'name':'Nobara Kugisaki',
        'equipment':'Hammer',//'Nails','Straw Doll'),
        'ability':'Resonance'//,'Straw Doll Technique','Hair Pin')
    },
    'maki':{
        'name':'Maki Zenin',
        'equipment':'Naginata',
        'ability':'Cursed Tool Usage'
    },
    'toge':{
        'name':'Toge Inumaki',
        'equipment':'Cough Syrup',
        'ability':'Cursed Speech'
    },
    'panda':{
        'name':'Panda',
        'equipment':'Knuckle Bracers',
        'ability':'Cursed Corpse Modes'
    },
    'yuta':{
        'name':'Yuta Okkotsu',
        'equipment':'Katana',
        'ability':'Rika'
    },
    'mai':{
        'name':'Mai Zenin',
        'equipment':'Revolver',
        'ability':'Construction'
    },
    'todo':{
        'name':'Aoi Todo',
        'equipment':'Playful Cloud',
        'ability':'Boogie Woogie'
    },
    'noritoshi':{
        'name':'Noritoshi Kamo',
        'equipment':'Bow and Arrows',
        'ability':'Blood Manipulation'
    },
    'momo':{
        'name':'Momo Nishimiya',
        'equipment':'Straw Broom',
        'ability':'Wind Scythe'
    },
    'nanami':{
        'name':'Kento Nanami',
        'equipment':'Blunt Sword',
        'ability':'Ratio Technique'//,
                   // 'Overtime')
    },
    'ino':{
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
    console.log('characterName:', characterName)
    if(characters[characterName]){
        res.json(characters[characterName])
    }else{
        res.json(characters['unknown'])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}!`)
})