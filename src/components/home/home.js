import React from "react";
import Carousel from "react-material-ui-carousel";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import "./home.css";
import guitar from "../../images/guitar.png";
import guitar3 from "../../images/guitar3.jpg";
import cello from "../../images/cello.png";
import piano from "../../images/piano.jpg";
import flute from "../../images/flute.jpg";
import violin2 from "../../images/violin2.jpg";
import harp from "../../images/harp.png";
import Saxophone from "../../images/saxophone.png";
import simchaLeiner from "../../images/simchaLeiner.jpg";
import baruchLevine from "../../images/baruchLevine.jpeg";
import avrahamFried from "../../images/avrahamFried.jpg";
import yaakovShwekey from "../../images/yaakovShwekey.png";
import eitanKatz from "../../images/eitanKatz.jpg";
import joeyNewcomb from "../../images/joeyNewcomb.jpg";
import eliDachs from "../../images/eliDachs.png";
import quote1 from "../../images/musicQuote1.jpg";
import quote3 from "../../images/musicQuote3.png";
import quote4 from "../../images/musicQuote4.jpg";
import quote5 from "../../images/musicQuote5.jpg";
import quote6 from "../../images/musicQuote6.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

export const Home = () => {
  return (
    <body>
      <Container maxWidth="lg">
        <br></br>
        <Carousel
          autoPlay={true}
          navButtonsAlwaysVisible={true}
          animationDuration={2000}
          size="large"
        >
          <img class="carouselImage" src={quote1} alt="music quote" />
          <img class="carouselImage" src={quote3} alt="music quote" />
          <img class="carouselImage" src={quote4} alt="music quote" />
          <img class="carouselImage" src={quote5} alt="music quote" />
          <img class="carouselImage" src={quote6} alt="music quote" />
        </Carousel>
        <table>
          <tbody>
            <tr>
              <td>
                <Box>
                  <Card sx={{ margin: "1rem" }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={piano}
                      alt="piano"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Piano
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        The piano is a stringed keyboard instrument in which the
                        strings are struck by wooden hammers that are coated
                        with a softer material. It is played using a keyboard,
                        which is a row of keys that the performer presses down
                        or strikes with the fingers and thumbs of both hands to
                        cause the hammers to strike the strings.
                      </Typography>
                    </CardContent>
                  </Card>

                  <Card sx={{ margin: "1rem" }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={guitar3}
                      alt="guitar"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Guitar
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        The guitar is a fretted musical instrument that
                        typically has six strings. It is usually held flat
                        against the player's body and played by strumming or
                        plucking the strings with the dominant hand, while
                        simultaneously pressing selected strings against frets
                        with the fingers of the opposite hand.
                      </Typography>
                    </CardContent>
                  </Card>

                  <Card sx={{ margin: "1rem" }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={violin2}
                      alt="violin"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Violin
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        The violin, sometimes known as a fiddle, is a wooden
                        chordophone (string instrument) in the violin family.
                        Most violins have a hollow wooden body. It is the
                        smallest and thus highest-pitched instrument (soprano)
                        in the family in regular use. The violin typically has
                        four strings (some can have five), usually tuned in
                        perfect fifths with notes G3, D4, A4, E5, and is most
                        commonly played by drawing a bow across its strings. It
                        can also be played by plucking the strings with the
                        fingers and, in specialized cases, by striking the
                        strings with the wooden side of the bow.
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{ margin: "1rem" }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={flute}
                      alt="flute"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Flute
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        The flute is a family of classical music instrument in
                        the woodwind group. Like all woodwinds, flutes are
                        aerophones, meaning they make sound by vibrating a
                        column of air. However, unlike woodwind instruments with
                        reeds, a flute is a reedless wind instrument that
                        produces its sound from the flow of air across an
                        opening. According to the instrument classification of
                        Hornbostel–Sachs, flutes are categorized as edge-blown
                        aerophones. A musician who plays the flute is called a
                        flautist or flutist.
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{ margin: "1rem" }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={cello}
                      alt="cello"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Cello
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        The cello or violoncello is a bowed (sometimes plucked
                        and occasionally hit) string instrument of the violin
                        family. Its four strings are usually tuned in perfect
                        fifths: from low to high, C2, G2, D3 and A3. The viola's
                        four strings are each an octave higher. Music for the
                        cello is generally written in the bass clef, with tenor
                        clef, and treble clef used for higher-range passages.
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{ margin: "1rem" }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={harp}
                      alt="harp"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Harp
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        The harp is a stringed musical instrument that has a
                        number of individual strings running at an angle to its
                        soundboard; the strings are plucked with the fingers.
                        Harps can be made and played in various ways, standing
                        or sitting, and in orchestras or concerts. Its most
                        common form is triangular in shape and made of wood.
                        Some have multiple rows of strings and pedal
                        attachments.
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
                <Box
                  sx={{
                    background: "'#FFABC8'",
                    borderRadius: "10px",
                    padding: "2rem",
                  }}
                ></Box>
                <Alert severity="success">
                  You made it! For more information on musical instruments,
                  visit{" "}
                  <a href="https://en.wikipedia.org/wiki/Musical_instrument">
                    Musical Instruments
                  </a>
                </Alert>
              </td>
              <td>
                <h4>Hey there! Welcome to Esther's world of music!</h4>

                <p>
                  Esther is currently an undergraduate student at Touro College,
                  hoping to graduate in June 2023. She enjoys listening to
                  music, singing, and playing musical instruments during her
                  free time.
                </p>
                <img src={guitar} alt="guitar"></img>
                <img src={Saxophone} alt="saxophone"></img>

                <br></br>
                <br></br>

                <h4> Great Singers </h4>
                <p>How many of these faces do you recognize? :) </p>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
                  <img
                    class="stackImage"
                    src={baruchLevine}
                    alt="Baruch Levine"
                  ></img>
                  <img
                    class="stackImage"
                    src={simchaLeiner}
                    alt="Simcha Leiner"
                  ></img>
                  <img
                    class="stackImage"
                    src={avrahamFried}
                    alt="Avraham Fried"
                  ></img>
                </Stack>

                <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
                  <img
                    class="stackImage"
                    src={joeyNewcomb}
                    alt="Joey Newcomb"
                  ></img>
                  <img class="stackImage" src={eliDachs} alt="Eli Dachs"></img>
                  <img
                    class="stackImage"
                    src={eitanKatz}
                    alt="Eitan Katz"
                  ></img>
                  <img
                    class="stackImage"
                    src={yaakovShwekey}
                    alt="Yaakov Shwekey"
                  ></img>
                </Stack>

                <br></br>

                <h4>Popular Genres of Music:</h4>

                <div class="genre">
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Pop Music</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        A genre of popular music that originated in the West
                        during the 1950s and 1960s. Pop music is eclectic, often
                        borrowing elements from urban, dance, rock, Latin,
                        country, and other styles. Songs are typically short to
                        medium-length with repeated choruses, melodic tunes, and
                        hooks.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>Hip Hop Music</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Hip hop or rap music formed in the United States in the
                        1970s and consists of stylized rhythmic music that
                        commonly accompanies rhythmic and rhyming speech
                        ("rapping").
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>Rock Music</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        A genre of popular music that originated as "rock and
                        roll" in the United States in the 1950s, and developed
                        into a range of different styles in the 1960s and later.
                        Compared to pop music, rock places a higher degree of
                        emphasis on musicianship, live performance, and an
                        ideology of authenticity.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Rhythm and Blues</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        A genre of popular African-American music that
                        originated in the 1940s as urbane, rocking, jazz based
                        music with a heavy, insistent beat. Lyrics focus heavily
                        on the themes of triumphs and failures in terms of
                        relationships, freedom, economics, and aspirations.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Country</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        A genre of United States popular music with origins in
                        folk, Blues and Western music, often consisting of
                        ballads and dance tunes with generally simple forms and
                        harmonies accompanied by mostly string instruments such
                        as banjos, electric and acoustic guitars, dobros, and
                        fiddles as well as harmonicas.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Classical Music</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Art music produced or rooted in the traditions of
                        Western music, including both liturgical and secular
                        music, over the broad span of time from roughly the 11th
                        century to the present day.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <p>
                  For more information visit:{" "}
                  <a href="https://research.google.com/audioset/ontology/music_genre_1.html">
                    Audioset
                  </a>
                </p>
                <br></br>
                <br></br>
                <h4>The Voice of Music</h4>
                <p class="poem">
                  Music, oh music, the language of the soul,
                  <br></br>A melody that makes us feel whole,
                  <br></br>
                  From the beat of the drums to the strum of a chord,
                  <br></br>
                  It brings us together, in perfect accord.
                  <br></br>
                  <br></br>
                  In notes and rhythms, it speaks to our heart,
                  <br></br>A symphony of emotions that sets us apart,
                  <br></br>
                  It can make us dance, it can make us weep,
                  <br></br>
                  And take us to places, we never thought we'd keep.
                  <br></br>
                  <br></br>A voice that echoes, across the land,
                  <br></br>A universal language, we all understand,
                  <br></br>
                  In joy and sorrow, it brings us peace,
                  <br></br>
                  And fills our hearts, with a sweet release.
                  <br></br>
                  <br></br>
                  From classical to rock, and all in between,
                  <br></br>
                  Music is the magic, that makes life serene,
                  <br></br>
                  It touches our souls, and sets us free,
                  <br></br>A gift that brings us, eternal harmony.
                  <br></br>
                  <br></br>
                  So let us embrace, this beautiful art,
                  <br></br>
                  And let the music, speak to our heart,
                  <br></br>
                  For it is the rhythm, that keeps us alive,
                  <br></br>
                  And gives us the strength, to thrive and survive.
                  <br></br>
                  <br></br>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
    </body>
  );
};
