'use client';
import {
    Button,
    CssBaseline,
    Divider,
    Grid,
    Input,
    Sheet,
    Stack,
    Typography
} from "@mui/joy";
import RepeatIcon from '@mui/icons-material/Repeat';
import {languages, words} from "@/app/languages";
import {useRouter, useSearchParams} from "next/navigation";
import {ChangeEvent, useEffect, useState} from "react";
import SettingsIcon from '@mui/icons-material/Settings';


/**
 * Displays the main type speed test interface and handles all user inputs
 *
 * @constructor
 */
const Start = () => {

    /**
     * Query parameters
     */
    const params = useSearchParams();
    const router = useRouter();

    /**
     * Generates a random array of words
     *
     * @param len The amount of words in the array
     */
    const generateText = (len: number): string[] => {
        let options = languages.filter((l) => l.name === params.get('lang'))[0].items.concat(words);
        const text: string[] = [];
        for (let i=0; i<len; i++) {
            text.push(options[Math.floor(Math.random() * options.length)]);
        }
        return text;
    }

    const [secondsLeft, setSecondsLeft] = useState<number>(parseInt(params.get('secs') ?? '0', 10));
    const [textToType, setTextToType] = useState<string[]>(generateText(6));
    const [typedText, setTypedText] = useState<string>('');
    const [wordCount, setWordCount] = useState<number>(0);
    const [badWordCount, setBadWorldCount] = useState<number>(0);
    const [timeOver, setTimeOver] = useState<boolean>(false);
    const [started, setStarted] = useState<boolean>(false);


    /**
     * Sets all variables ready for repeat
     */
    const repeat = () => {
        setStarted(false);
        setTimeOver(false);
        setSecondsLeft(parseInt(params.get('secs') ?? '', 10));
        setTextToType(generateText(6));
        setTypedText('');
        setWordCount(0);
        setBadWorldCount(0);
    }

    /**
     * Counts down a second and handles time is over event
     */
    const count = () => {
        const newTime = secondsLeft-1;
        if (newTime <= 0) {
            setTimeOver(true);
        }
        setSecondsLeft(newTime);
    }

    /**
     * Counts the seconds through timeouts
     */
    useEffect(() => {
        if (started && !timeOver) {
            setTimeout(count, 1000);
        }
    }, [started, secondsLeft]);

    // @ts-ignore
    /**
     * Handles type event
     *
     * @param e Event
     */
    const onType = (e: ChangeEvent<HTMLInputElement>) => {
        if (!timeOver) {
            setTypedText(e.target.value);
        }
    }

    /**
     * Handles enter press and input validation
     *
     * @param e event
     */
    //@ts-ignore
    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (!started) {
            setStarted(true);
        }
        if (!timeOver) {
            if (e.key === 'Enter') {
                if (typedText === textToType[0]) {
                    setWordCount(wordCount+1);
                } else {
                    setBadWorldCount(badWordCount+1);
                }
                setTypedText('');
                setTextToType(textToType.splice(1).concat(generateText(1)));
            }
        }
    }

    return (
        <main>
            <CssBaseline />
            <Sheet
                sx={{
                    width: '70vw',
                    mx: 'auto', // margin left & right
                    my: 4, // margin top & bottom
                    py: 3, // padding top & bottom
                    px: 2, // padding left & right
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    borderRadius: 'sm',
                    boxShadow: 'md',
                }}
                variant="outlined"
            >
                <div>
                    <Typography level="h1" component="h1">
                        <b>Time left: {secondsLeft}</b>
                    </Typography>
                    <Divider />
                    {timeOver && (
                        <div>
                            <Typography level="h2">WPM: {wordCount / parseInt(params.get('secs') ?? '', 10) * 60}</Typography>
                            <Typography level="h2">Right words: {wordCount}</Typography>
                            <Typography level="h2">Wrong words: {badWordCount}</Typography>
                            <Stack direction="row" spacing={2} sx={{paddingTop: '1em', paddingBottom: '1em'}}>
                                <Button onClick={repeat} sx={{width: 200}}><RepeatIcon /> Repeat</Button>
                                <Button sx={{width: 200}} onClick={() => router.push("/")}><SettingsIcon /> Change settings</Button>
                            </Stack>
                            <Divider />
                        </div>
                    )}
                    <Grid container direction="row">
                        <Grid xs={6}>
                            <Typography style={{
                                marginRight: '0',
                                paddingRight: '0',
                                textAlign: 'end',
                                color: textToType[0].startsWith(typedText) ? 'green' : 'red'
                            }} level="h3">
                                {typedText}
                            </Typography>
                        </Grid>
                        <Grid xs={6}>
                            <Typography style={{marginLeft: '0', paddingLeft: '0', overflow: 'hidden'}} level="h3">
                                {textToType.join('⏎ ').substring(typedText.length)}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Input type="text" value={typedText} onChange={onType} onKeyDown={onKeyDown} disabled={timeOver} />
                </div>
            </Sheet>
        </main>
    );
}

export default Start;
