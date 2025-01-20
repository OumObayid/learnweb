import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AjaxComponent } from './pages/tests/ajax/ajax.component';
import { BindingComponent } from './pages/tests/binding/binding.component';
import { InputComponent } from './pages/tests/input/input.component';
import { Test1Component } from './pages/tests/test1/test1.component';
import { OutputComponent } from './pages/tests/output/output.component';
import { Signal1Component } from './pages/tests/signal/signal1.component';
import { Class1Component } from './pages/tests/class/class1.component';
import { Class2Component } from './pages/tests/class/class2.component';
import { Class3Component } from './pages/tests/class/class3.component';
import { Class4Component } from './pages/tests/class/class4.component';
import { Class5Component } from './pages/tests/class/class5.component';
import { Style1Component } from './pages/tests/styles/style1.component';
import { Style2Component } from './pages/tests/styles/style2.component';
import { Style3Component } from './pages/tests/styles/style3.component';
import { Style4Component } from './pages/tests/styles/style4.component';
import { Style5Component } from './pages/tests/styles/style5.component';
import { PipesComponent } from './pages/tests/pipes/pipes.component';
import { CustomPipeComponent } from './pages/tests/pipes/CustomPipe.component';
import { BouclesComponent } from './pages/tests/boucles/boucles.component';
import { ForComponent } from './pages/tests/boucles/for.component';
import { ngContentChildComponent } from './pages/tests/ngContent/ngContentChild.component';
import { ViewChild1Component } from './pages/tests/viewChild/viewChild1.component';
import { ViewChild2Component } from './pages/tests/viewChild/viewChild2.component';
import { IfComponent } from './pages/tests/boucles/if.component';
import { SwitchComponent } from './pages/tests/boucles/switch.component';
import { ViewChildren1Component } from './pages/tests/viewChildren/viewChildren1.component';
import { ViewChildren2Component } from './pages/tests/viewChildren/viewChildren2.component';
import { ContentChild1Component } from './pages/tests/contentChild/contentChild1.component';
import { IntervalComponent } from './pages/tests/interval/interval.component';
import { ContentChild2Component } from './pages/tests/contentChild/contentChild2.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'binding', component:BindingComponent},
    {path:'ajax', component:AjaxComponent},
    {path:'input', component:InputComponent},
    {path:'input2', component:Test1Component},
    {path:'output', component:OutputComponent},
    {path:'signal1', component:Signal1Component},
    {path:'class1', component:Class1Component},
    {path:'class2', component:Class2Component},
    {path:'class3', component:Class3Component},
    {path:'class4', component:Class4Component},
    {path:'class5', component:Class5Component},
    {path:'style1', component:Style1Component},
    {path:'style2', component:Style2Component},
    {path:'style3', component:Style3Component},
    {path:'style4', component:Style4Component},
    {path:'style5', component:Style5Component},
    {path:'pipes', component:PipesComponent},
    {path:'Custompipes', component:CustomPipeComponent},
    {path:'boucles', component:BouclesComponent},
    {path:'for', component:ForComponent},
    {path:'if', component:IfComponent},
    {path:'switch', component:SwitchComponent},
    {path:'ngContentChild', component:ngContentChildComponent},
    {path:'viewChild1', component:ViewChild1Component},
    {path:'viewChild2', component:ViewChild2Component},
    {path:'viewChildren1', component:ViewChildren1Component},
    {path:'viewChildren2', component:ViewChildren2Component},
    {path:'contentChild1', component:ContentChild1Component},
    {path:'contentChild2', component:ContentChild2Component},
    {path:'interval', component:IntervalComponent},
];
