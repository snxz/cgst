<script>
    import ThemeElement from "./ThemeElement.svelte";
    const themes = {
        theme_key: {
            "#ffce51": "Block1",
            "#a67fb9": "Block2",
            "#e67326": "Block3",
            "#00abbd": "Block4",
            "#aac02c": "Block5",
            "#ef4957": "Block6",
            "#ff75f2": "Block7",
            "#c0c0c0": "Activity",
            "#ffffff": "Free",
        },
        default_theme: {
            "Block1": "#ffce51",
            "Block2": "#a67fb9",
            "Block3": "#e67326",
            "Block4": "#00abbd",
            "Block5": "#aac02c",
            "Block6": "#ef4957",
            "Block7": "#ff75f2",
            "Activity": "#c0c0c0",
            "Free": "#ffffff",  
        },
        rainbow_drops_theme: {
            "Block1": "#d2bb00",
            "Block2": "#8038a4",
            "Block3": "#fb7821",
            "Block4": "#00abbd",
            "Block5": "#44bd00",
            "Block6": "#ef4957",
            "Block7": "#e352d6",
            "Activity": "#6a6a6a",
            "Free": "#1C1C1C",
        }
    }
</script>

<main>
    <ThemeElement theme={themes['default_theme']} name={"Default"}/>
    <ThemeElement theme={themes['default_theme']} name={"Default"}/>
    <ThemeElement theme={themes['raindbow_drops_theme']} name={"Rainbow Drops"}/>
</main>

<style>
    main {
        background-color: white;
    }
</style>
