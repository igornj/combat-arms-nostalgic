// import audioFile_01 from '../../Assets/songs/Behind Blue Eyes (Eyes Remix).mp3';
// import audioFile_02 from '../../Assets/songs/Day_One_White_City.mp3';

function importAll(r) {
  return r.keys().map(r);
}

const songs = importAll(require.context('../../Assets/songs/', false));

const tracks = [
  {
    title: 'Far East Movement ft. Ryan Tedder - Rocketeer',
    src: songs[0].default,
  },

  {
    title: '2AM Club ft. Chiddy - Every Evening',
    src: songs[1].default,
  },

  {
    title: '50 Cent ft. Lupe Fiasco - Through the Window',
    src: songs[2].default,
  },

  {
    title: 'Abandon All Ships - Take One Last Breath',
    src: songs[3].default,
  },

  {
    title: 'Abandon All Ships ft. A Game - Infamous',
    src: songs[4].default,
  },

  {
    title: 'Alex Jordahl - Michael Jordan',
    src: songs[5].default,
  },

  {
    title: 'Avicii - Levels',
    src: songs[6].default,
  },

  {
    title: 'Band Of Horses - The Funeral [Sound Remedy Remix]',
    src: songs[7].default,
  },

  {
    title: 'Bandana Split - Hello World',
    src: songs[8].default,
  },

  {
    title: 'Limp Bizkit - Behind Blue Eyes (Eyes Remix)',
    src: songs[9].default,
  },

  {
    title: 'BoB ft. Hayley Williams - Airplanes',
    src: songs[10].default,
  },

  {
    title: 'BoB ft. Priscilla - John Doe',
    src: songs[11].default,
  },

  {
    title: 'BoB ft. Playboy Tre - Just A Sign',
    src: songs[12].default,
  },

  {
    title: 'Calvin Coolidge - Famous',
    src: songs[13].default,
  },

  {
    title: 'Cam Meekins - Slow Down',
    src: songs[14].default,
  },

  {
    title: 'Candles - Jez Dior',
    src: songs[15].default,
  },

  {
    title: 'Chris Brown ft. Big Sean & Wiz Khalifa - Till I Die',
    src: songs[16].default,
  },

  {
    title: 'D WHY - One Day',
    src: songs[17].default,
  },

  {
    title: 'Danny Byrd ft. Netsky - Tonight',
    src: songs[18].default,
  },

  {
    title: 'Davie West - Black Star',
    src: songs[19].default,
  },

  {
    title: 'Day One - White City',
    src: songs[20].default,
  },

  {
    title: 'Dirty - Comming home',
    src: songs[21].default,
  },

  {
    title: `Don't You Worry Child - Swedish House Mafia (Alex G Friends Acoustic Cover)`,
    src: songs[22].default,
  },

  {
    title: 'Ellie Goulding - Lights',
    src: songs[23].default,
  },

  {
    title: 'Eminem ft. Rihanna - The Monster',
    src: songs[24].default,
  },

  {
    title: 'Eminem ft. Nicki Minaj & Drake - Higher',
    src: songs[25].default,
  },

  {
    title: 'Feint ft. Veela - The Journey',
    src: songs[26].default,
  },

  {
    title: 'G-Eazy - Lost In Translation',
    src: songs[27].default,
  },

  {
    title: 'Gym Class Heroes Stereo Hearts ft. Adam Levine',
    src: songs[28].default,
  },

  {
    title: 'Hi Rez - Better Place',
    src: songs[29].default,
  },

  {
    title: 'Hoodie Allen - WhiteGirlProblems',
    src: songs[30].default,
  },

  {
    title: 'Hoodie Allen ft. Two Door Cinema Club - Words Of Wisdom',
    src: songs[31].default,
  },

  {
    title: 'Hoodie Allen ft. Marina The Diamonds - You Are Not A Robot',
    src: songs[32].default,
  },

  {
    title: 'Hoodie Allen - hey now',
    src: songs[33].default,
  },

  {
    title: 'Jake Miller - Like Me',
    src: songs[34].default,
  },

  {
    title:
      'Jared Evan ft. Wax  Emilio Rojas  Tayyib Ali - Charlie Brown (Remix)',
    src: songs[35].default,
  },

  {
    title: 'Jason Derulo - Whatcha Say',
    src: songs[36].default,
  },

  {
    title: 'Jay-Z ft. Kanye West  Otis Redding - Otis',
    src: songs[37].default,
  },

  {
    title: 'Jon Bellion - Ungrateful Eyes',
    src: songs[38].default,
  },

  {
    title: 'KDREW - Firestarter',
    src: songs[39].default,
  },

  {
    title: 'e-dubble - Let Me Oh',
    src: songs[40].default,
  },

  {
    title: 'Lisa Rowe - Black Light (Virtual Riot Remix)',
    src: songs[41].default,
  },

  {
    title: 'Logic ft. Castro - Ballin',
    src: songs[42].default,
  },

  {
    title: 'Logic - Inception',
    src: songs[43].default,
  },

  {
    title: 'Logic - The Spotlight',
    src: songs[44].default,
  },

  {
    title: 'Los - Count Down',
    src: songs[45].default,
  },

  {
    title: 'Rihanna  ft. Eminem - Love the way You lie (Part II)',
    src: songs[46].default,
  },

  {
    title: 'Lupe Fiasco - The Show Goes On',
    src: songs[47].default,
  },

  {
    title: 'Marc Goone - Take for Granted',
    src: songs[48].default,
  },

  {
    title: 'Marvin Divine - Take My World',
    src: songs[49].default,
  },

  {
    title: 'Marvin Divine - Settle Down',
    src: songs[50].default,
  },

  {
    title: 'Meg & Dia - Monster(Dubstep)',
    src: songs[51].default,
  },

  {
    title: 'Moosh & Twist - Hold It Down',
    src: songs[52].default,
  },

  {
    title: 'Timeflies Tuesday - So Good',
    src: songs[53].default,
  },

  {
    title: 'Of Porcelain Vs Garbage -  Shut Your Signal',
    src: songs[54].default,
  },

  {
    title: 'Owl City - Fireflies',
    src: songs[55].default,
  },

  {
    title: 'P Holla - Do It For Loves',
    src: songs[56].default,
  },

  {
    title: 'P Holla - Love Song',
    src: songs[57].default,
  },

  {
    title: 'Foster The People - Pumped Up Kicks (Dubstep)',
    src: songs[58].default,
  },

  {
    title: 'Parano Sheitan - Fratello Di Sangue',
    src: songs[59].default,
  },

  {
    title: 'Pmac - One',
    src: songs[60].default,
  },

  {
    title: 'Rihanna - You Da One (Remix J REYEZ, Lydia Paek, Tommy C)',
    src: songs[61].default,
  },

  {
    title: 'Skizzy Mars ft. G-Eazy - Pay For You',
    src: songs[62].default,
  },

  {
    title: 'Metrickz & Richter - So Fame So Fame',
    src: songs[63].default,
  },

  {
    title: 'Switch Fusion - Anchor',
    src: songs[64].default,
  },

  {
    title: 'T-Pain ft. Chris Brown - Best Love Song',
    src: songs[65].default,
  },

  {
    title: 'Timeflies Tuesday - Taylor',
    src: songs[66].default,
  },

  {
    title: 'Tinie Tempah Ft. Wiz Khalifa - Til Im Gone',
    src: songs[67].default,
  },

  {
    title: `Upper West   Wouldn't It Be`,
    src: songs[68].default,
  },

  {
    title: 'Wiz Khalifa - No Sleep',
    src: songs[69].default,
  },

  {
    title: 'YONAS - Die Young',
    src: songs[70].default,
  },

  {
    title: 'YONAS - ft. Ellie Goulding Lights (Remix)',
    src: songs[71].default,
  },

  {
    title: 'Snoop Dogg & Wiz Khalifa - Young, Wild and Free ft. Bruno Mars',
    src: songs[72].default,
  },

  {
    title: 'Zedd ft. Foxes - Clarity',
    src: songs[73].default,
  },

  {
    title: 'edIT - Ants',
    src: songs[74].default,
  },

  {
    title: 'Katy Perry ft. Kanye West',
    src: songs[75].default,
  },

  {
    title: 'Tinie Tempah ft. Eric Turner - Written in the stars',
    src: songs[76].default,
  },

  {
    title: '3OH!3 - Touchin on my',
    src: songs[77].default,
  },
];

export default tracks;
