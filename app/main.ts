import { enableProdMode } from "@angular/core";
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";

enableProdMode();
platformNativeScriptDynamic().bootstrapModule(AppModule);