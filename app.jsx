import React, {Link} from 'react';
import ReactDOM from 'react-dom/client';

import zg from './src/index.jsx';
import HomeIcon from './src/icon/home.jsx';
import RocketIcon from './src/icon/rocket.jsx';
import CalculatorIcon from './src/icon/calculator.jsx';
import LaptopIcon from './src/icon/laptop.jsx';

export class DemoApp extends React.Component {
    render (){
        console.log(zg.VERSION);

        return (
            <zg.App>    
                <zg.SideMenu.SideMenu 
                    logo={<object className="page-logo" type="image/svg+xml" data="assets/images/edo365_logo.svg"></object>} 
                    title={<object className="page-title" type="image/svg+xml" data="assets/images/edo365_text.svg"></object>}>
                    <zg.SideMenu.NavBlock>
                        <zg.SideMenu.NavLink className="active"><HomeIcon /> Home</zg.SideMenu.NavLink>
                        <zg.SideMenu.NavLink><CalculatorIcon /> Item 1</zg.SideMenu.NavLink>
                        <zg.SideMenu.NavLink><RocketIcon /> Item 2</zg.SideMenu.NavLink>
                        <zg.SideMenu.NavLink><LaptopIcon /> Item 3</zg.SideMenu.NavLink>
                    </zg.SideMenu.NavBlock>
                </zg.SideMenu.SideMenu>

                <zg.Header.Header>
                    <zg.Header.Search />
                    <zg.Header.Account> 
                        <a href="#null">test1</a>
                        <a href="#null">test2</a>
                        <a href="#null">test3</a>
                    </zg.Header.Account>
                </zg.Header.Header>
                
                <zg.Main.Main>
                    <zg.Main.Header backgroundImage="assets/images/edotest1.png">
                        <h1 class="main-header__heading">Hello User</h1>
                        <div class="main-header__updates">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus quibusdam praesentium facilis quam ullam sit, labore incidunt temporibus doloribus illo suscipit non iusto porro recusandae debitis, autem nostrum. Illum, neque.
                        </div>
                    </zg.Main.Header>

                    <zg.Main.Overview>
                        <zg.Main.OverviewCard icon="o" backgroundImage="https://source.unsplash.com/random/?night">Overview Card</zg.Main.OverviewCard>
                        <zg.Main.OverviewCard icon=".p" backgroundImage="https://source.unsplash.com/random/?landscape">Overview Card</zg.Main.OverviewCard>
                        <zg.Main.OverviewCard icon="c.i" backgroundImage="https://source.unsplash.com/random/?tree">Overview Card</zg.Main.OverviewCard>
                        <zg.Main.OverviewCard icon="d" backgroundImage="https://source.unsplash.com/random/?car">Overview Card</zg.Main.OverviewCard>
                    </zg.Main.Overview>

                    <zg.Main.Article>
                    <h1>Lorem ipsum dolor sit amet consectetuer adipiscing 
elit</h1>


<p>Lorem ipsum dolor sit amet, consectetuer adipiscing 
elit. Aenean commodo ligula eget dolor. Aenean massa 
<strong>strong</strong>. Cum sociis natoque penatibus 
et magnis dis parturient montes, nascetur ridiculus 
mus. Donec quam felis, ultricies nec, pellentesque 
eu, pretium quis, sem. Nulla consequat massa quis 
enim. Donec pede justo, fringilla vel, aliquet nec, 
vulputate eget, arcu. In enim justo, rhoncus ut, 
imperdiet a, venenatis vitae, justo. Nullam dictum 
felis eu pede <a class="external ext" href="#">link</a> 
mollis pretium. Integer tincidunt. Cras dapibus. 
Vivamus elementum semper nisi. Aenean vulputate 
eleifend tellus. Aenean leo ligula, porttitor eu, 
consequat vitae, eleifend ac, enim. Aliquam lorem ante, 
dapibus in, viverra quis, feugiat a, tellus. Phasellus 
viverra nulla ut metus varius laoreet. Quisque rutrum. 
Aenean imperdiet. Etiam ultricies nisi vel augue. 
Curabitur ullamcorper ultricies nisi.</p>


<h1>Lorem ipsum dolor sit amet consectetuer adipiscing 
elit</h1>


<h2>Aenean commodo ligula eget dolor aenean massa</h2>


<p>Lorem ipsum dolor sit amet, consectetuer adipiscing 
elit. Aenean commodo ligula eget dolor. Aenean massa. 
Cum sociis natoque penatibus et magnis dis parturient 
montes, nascetur ridiculus mus. Donec quam felis, 
ultricies nec, pellentesque eu, pretium quis, sem.</p>


<blockquote>
Lorem ipsum dolor sit amet, consectetuer 
adipiscing elit. Aenean commodo ligula eget dolor. 
Aenean massa <strong>strong</strong>. Cum sociis 
natoque penatibus et magnis dis parturient montes, 
nascetur ridiculus mus. Donec quam felis, ultricies 
nec, pellentesque eu, pretium quis, sem. Nulla consequat 
massa quis enim. Donec pede justo, fringilla vel, 
aliquet nec, vulputate eget, arcu. In <em>em</em> 
enim justo, rhoncus ut, imperdiet a, venenatis vitae, 
justo. Nullam <a class="external ext" href="#">link</a>
dictum felis eu pede mollis pretium.
</blockquote>


<h2>Aenean commodo ligula eget dolor aenean massa</h2>


<p>Lorem ipsum dolor sit amet, consectetuer adipiscing 
elit. Aenean commodo ligula eget dolor. Aenean massa. 
Cum sociis natoque penatibus et magnis dis parturient 
montes, nascetur ridiculus mus. Donec quam felis, 
ultricies nec, pellentesque eu, pretium quis, sem.</p>


<h3>Cum sociis natoque penatibus et magnis dis 
parturient montes nascetur ridiculus mus</h3>


<h4>Donec quam felis ultricies nec pellentesque eu 
pretium quis sem nlla consequat massa quis enim</h4>


<ul>
  <li>Lorem ipsum dolor sit amet consectetuer.</li>
  <li>Aenean commodo ligula eget dolor.</li>
  <li>Aenean massa cum sociis natoque penatibus.</li>
</ul>


<p>Lorem ipsum dolor sit amet, consectetuer adipiscing 
elit. Aenean commodo ligula eget dolor. Aenean massa. 
Cum sociis natoque penatibus et magnis dis parturient 
montes, nascetur ridiculus mus. Donec quam felis, 
ultricies nec, pellentesque eu, pretium quis, sem.</p>


<form action="#" method="post">
  <fieldset>
    <legend>Test Form</legend>
    <label for="name">Name:</label>
    <input type="text" id="name" placeholder="Enter your 
full name" />

    <label for="email">Email:</label>
    <input type="email" id="email" placeholder="Enter 
your email address" />

    <div className="break"></div>

    <label for="message">Message:</label>
    <textarea id="message" placeholder="What's on your 
mind?"></textarea>

    <div className="break"></div>
    <input className="primary" type="submit" value="Send message" />

  </fieldset>
</form>


<p>Lorem ipsum dolor sit amet, consectetuer adipiscing 
elit. Aenean commodo ligula eget dolor. Aenean massa. 
Cum sociis natoque penatibus et magnis dis parturient 
montes, nascetur ridiculus mus. Donec quam felis, 
ultricies nec, pellentesque eu, pretium quis, sem.</p>


<table class="data">
  <tr>
    <th>Entry Header 1</th>
    <th>Entry Header 2</th>
    <th>Entry Header 3</th>
    <th>Entry Header 4</th>
  </tr>
  <tr>
    <td>Entry First Line 1</td>
    <td>Entry First Line 2</td>
    <td>Entry First Line 3</td>
    <td>Entry First Line 4</td>
  </tr>
  <tr>
    <td>Entry Line 1</td>
    <td>Entry Line 2</td>
    <td>Entry Line 3</td>
    <td>Entry Line 4</td>
  </tr>
  <tr>
    <td>Entry Last Line 1</td>
    <td>Entry Last Line 2</td>
    <td>Entry Last Line 3</td>
    <td>Entry Last Line 4</td>
  </tr>
</table>


<p>Lorem ipsum dolor sit amet, consectetuer adipiscing 
elit. Aenean commodo ligula eget dolor. Aenean massa. 
Cum sociis natoque penatibus et magnis dis parturient 
montes, nascetur ridiculus mus. Donec quam felis, 
ultricies nec, pellentesque eu, pretium quis, sem.</p>

                    </zg.Main.Article>

                    <zg.Main.Cards>
                        <zg.Main.Card hero="https://source.unsplash.com/random/?stone" title="Title 1" >
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum excepturi exercitationem ea quo qui! Ut impedit provident voluptas modi doloremque? Culpa harum ab molestias doloribus deleniti nulla a, nemo quasi?</p>
                        </zg.Main.Card>
                        <zg.Main.Card hero="https://source.unsplash.com/random/?field" title="Title 2" >
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, deleniti officia eligendi minus laboriosam quo ea eum dolor laborum! Alias ullam ipsa eius eum iure cum maiores nisi consequuntur at.</p>
                        </zg.Main.Card>
                        <zg.Main.Card hero="https://source.unsplash.com/random/?water" title="Title 3" >
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum sequi excepturi praesentium facilis ipsa sapiente provident incidunt quaerat natus voluptatem, vitae cum expedita vero aut dolores aliquid temporibus harum magnam?</p>
                        </zg.Main.Card>
                    </zg.Main.Cards>
                </zg.Main.Main>

                <zg.Footer>
                    <div className="footer__copyright">&copy; 2022 Benjamin 'Benno' Falkner</div>
                    <div className="footer__legal">
                        <a href="#null">Impressum</a> | 
                        <a href="#null">Datenschutz</a> | 
                        <a href="#null">Kontakt</a> 
                    </div>
                </zg.Footer>
            </zg.App>
        );
    }
}

export function createApp(selector,application,args={}){
    const targets = document.querySelectorAll(selector);
    targets.forEach(target => {
        const root = ReactDOM.createRoot(target)
        const AppElement = application;
        root.render(
            <React.StrictMode>
                <AppElement element={target} args={args}/>
            </React.StrictMode>
        );
    })
}