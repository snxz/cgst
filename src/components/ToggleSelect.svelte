<main>
    <form class="form">
        <div class="switch-field">
            <input type="radio" id="radio-three" name="switch-two" value="on" checked/>
            <label for="radio-three">On</label>
            <input type="radio" id="radio-four" name="switch-two" value="random" />
            <label for="radio-four">Random</label>
            <input type="radio" id="radio-five" name="switch-two" value="off" />
            <label for="radio-five">Off</label>
        </div>
    </form>
</main>

<style>
    .switch-field {
        display: flex;
        margin-bottom: 36px;
        overflow: hidden;
    }

    .switch-field input {
        position: absolute !important;
        clip: rect(0, 0, 0, 0);
        height: 1px;
        width: 1px;
        border: 0;
        overflow: hidden;
    }

    .switch-field label {
        background-color: #ffffff;
        color: rgba(0, 0, 0, 0.6);
        font-size: 14px;
        line-height: 1;
        text-align: center;
        padding: 8px 16px;
        margin-right: -1px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
        transition: all 0.1s ease-in-out;
    }

    .switch-field label:hover {
        cursor: pointer;
    }

    .switch-field input:checked + label {
        background-color: #2196F3;
        box-shadow: none;
    }

    .switch-field label:first-of-type {
        border-radius: 20px 0 0 20px;
    }

    .switch-field label:last-of-type {
        border-radius: 0 20px 20px 0;
    }
</style>