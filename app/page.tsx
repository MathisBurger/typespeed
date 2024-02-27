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
import {useState} from "react";

export default function Home() {

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
                <form>
                    <Stack spacing={2}>
                        <FormControl style={{marginTop: '2em'}}>
                            <FormLabel>Programming language</FormLabel>
                            <Select placeholder="Choose">
                                {languages.map((lang) => (
                                    <Option value={lang.name} key={lang.name}>{lang.name}</Option>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Duration in Seconds</FormLabel>
                            <Input type="number" placeholder="600" />
                        </FormControl>
                        <Button type="submit">Starten</Button>
                    </Stack>
                </form>
            </div>
        </Sheet>
    </main>
  );
}
