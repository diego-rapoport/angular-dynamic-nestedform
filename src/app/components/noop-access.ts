import { ControlValueAccessor } from "@angular/forms";

export const NOOP_VALUE_ACCESSOR: ControlValueAccessor =
    {
        writeValue(): void { },
        registerOnChange(): void { },
        registerOnTouched(): void { }
    };


