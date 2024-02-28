'use client';
import {
    Button,
    CssBaseline,
    Divider,
    FormControl,
    FormLabel,
    Input,
    Option,
    Select,
    Sheet,
    Stack,
    Typography
} from "@mui/joy";
import {languages} from "@/app/languages";
import {useRouter} from "next/navigation";
import {FormEvent} from "react";

/**
 * Handles default language and time span selection
 *
 * @constructor
 */
export default function Home() {

    const router = useRouter();

    /**
     * handles form submit
     *
     * @param e form event
     */
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const destination = `/start?lang=${formData.get('lang')}&secs=${formData.get('secs')}`;
        router.push(destination);
    }

  return (
    <main>
      <CssBaseline />
        <Sheet
            sx={{
                width: 300,
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
                <Typography level="h2" component="h1">
                    <b>Typespeed</b>
                </Typography>
                <Divider />
                <form onSubmit={onSubmit}>
                    <Stack spacing={2}>
                        <FormControl style={{marginTop: '2em'}}>
                            <FormLabel>Programming language</FormLabel>
                            <Select placeholder="Choose" name="lang">
                                {languages.map((lang) => (
                                    <Option value={lang.name} key={lang.name}>{lang.name}</Option>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Duration in Seconds</FormLabel>
                            <Input type="number" placeholder="600" name="secs" />
                        </FormControl>
                        <Button type="submit">Start</Button>
                    </Stack>
                </form>
            </div>
        </Sheet>
    </main>
  );
}
