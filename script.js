const conceptsBtn = document.getElementById('concepts-btn')
const conceptUl = document.getElementById('concept-list')
const projectsBtn = document.getElementById('projects-button')
const projectsUl = document.getElementById('project-list')
const main = document.getElementById('main')
const nav = document.getElementById('nav')

const conceptArray = [
    {
        'title': 'Operator Tools',
        'id': 'operator-tools',
        'data': `
        <div id="console-div" class="mb-20">
        <h1 class="text-4xl pl-1 border-l-4 border-b border-pink-500 inline-block">Operator Tools</h1>
        <h4 class="mt-4 mb-4 text-base">You have been given the keys to the kingdom...</h4>
        <div class="border-b-2 mb-5"></div>
        <p class="mb-5">As a new operator, you have been given access to what many of us at the corporation like to refer to as "Operator Tools." (NOTE: If your HUD Monitor is from before the war, this area may also be called "Developer Tools). This section of your HUD will allow you to access sections of the NeuralNET that is not available to the general public. In this section you will be able to view the inner workings of the NET, the HTML Sector, the CSS/Class Arc, and most importantly, the CONSOLE.</p>

        <small>To access the console in CHROME//BROWSER :</small>
        <div class="mb-5 bg-black">
            <p><span class="text-aqua">Apple</span> class HUD: <span class="text-lime">COMMAND+OPTION+C</span></p>
            <p><span class="text-aqua">Windows/Linux</span> class HUD: <span class="text-lime">CONTROL+SHIFT+C</span></p>
        </div>
        <p class="mb-5"></p>
        
        <p class="mb-5">The CONSOLE is where you will be able to run diagnostics on your hacks to ensure that they are functioning correctly. The initial and most primitive way of doing this is by using the console.log( ) method. Others exist but this is the one most new operators start with.</p>

       <small>The following is an example of using console.log to send the string 'Initiate Hack' to the console.</small>
        <p class="mb-5 bg-black">console.log('HACK COMPLETE');</p>
        <small>Open the console with one of the above commands and click the button</small>
        <div id="hackMini" class="flex items-center mt-2 bg-black justify-center pt-5 pb-5 max-w-xl mx-auto">
        <div id="hack-1"><button id="console-hack" class="p-1 bg-purple-500 text-black border border-black">HACK</button></div>
        <div id="hack-2" class="inline-block relative bg-red-600 ml-5 h-4 max-w-lg w-1/2 invisible">
            <div id="hack-2a" class="bg-aqua h-4 absolute text-center text-black text-xs items-center">
            </div>
        </div>
        </div>
        <small>Once the hack is 100% complete, you will be able to open the console and view the "HACK COMPLETE" console.log message.</small>`
    },
    {
        'title': 'Declaring Variables',
        'id': 'assign-variables',
        'data': `<h1 class="text-4xl pl-1 border-l-4 border-b border-pink-500 inline-block">Declaring Variables</h1>
        <h4 class="mt-4 mb-4 text-base">These are your children...</h4>
        <div class="border-b-2 mb-5"></div>
        <p class="mb-5">Declaring a variable is how we can access certain areas of the code. Without a variable, certain areas will become inaccessible to our insertion teams.</p>
        <p class="mb-5">As of writing this, you have 2 available ways to declare a variable. They are:</p>
        
        <p class="border-b border-r border-pink-500 inline-block pr-4">KEYWORD const</li>
        
        <p class="mb-5">Keyword <span class="text-purple-500">const</span> defines a constant variable. This cannot under any circumstances be changed. Doing so will incur an error and could lead to destabilization</p>
    
        <p class="border-b border-r border-pink-500 inline-block pr-4">KEYWORD let</p>
    
        <p class="mb-5">Keyword <span class="text-purple-500">let</span> allows more flexibility when declaring variable. It can be changed and augmented as the operator/developer sees fit. Be aware that by allowing change, it can lead to your code inadvertently becoming unstable</p>
        
        <small>Example of Declaring Variables</small>
    
        <div class="bg-black text-s pl-2 pt-2 pb-2 mb-5">
        <p><span class="text-purple-500">const</span> insertionTeam1 = 5;</p> 
        <p class="mb-2">// The number of members on this insertion team <span class="text-lime">CANNOT</span> be changed at any point in time.</p>
    
        <p><span class="text-purple-500">let</span> insertionTeam2 = 5;</p>
        <p class="mb-2">// The number of members on this insertion team <span class="text-lime">CAN</span> be changed at any point in time.</p>
    
        <p class>If at any point in the mission you change the amount of members on insertionTeam1, the <span class="text-purple-500">const</span> declaration will cause the system to output an error. However, because of the <span class="text-purple-500">let</span> declaration you can change the number of members on insertionTeam2 at anytime.</p>
        </div>
    
        <small>Please answer the following questions</small>
        <p>1. If you are tasked with operating a top secret mission, and are forbidden from bringing in any extra operatives. You would need to use the <input id="const1" class="bg-black text-aqua mr-1 ml-1 h-5 w-20 text-center"></input>declaration. </p>
        <button id="const1Btn" class="text-aqua text-xs items-center bg-black pl-1 pr-1 mt-2 mb-4 z-10 focus:outline-none">
        PROCESS ANSWER</button><div id="const1Result" class=""></div>
    
        <p>2. While monitoring your teams vital stats, you notice that their health begins to deteriorate. You feel that sending in a Stim-Operative would be beneficial to the team. To increase the number of members on the team, you would need to use the <input id="const2" class="bg-black text-aqua mr-1 ml-1 h-5 w-20 text-center"></input> declaration.</p>
        <button id="const2Btn" class="text-aqua text-xs items-center bg-black pl-1 pr-1 mt-2 mb-4 z-10 focus:outline-none">
        PROCESS ANSWER</button><div id="const2Result"></div>
        `,
    },
    {
        'title': 'Obtaining Elements',
        'id': 'obtainingElements',
        'data': `
        <h1 class="text-4xl pl-1 border-l-4 border-b border-pink-500 inline-block">Obtaining Elements</h1>
        <h4 class="mt-4 mb-4 text-base">Sometimes you just need to take the things the corporation needs...</h4>
        <div class="border-b-2 mb-5"></div>
        <p class="mb-5">drone euro-pop render-farm garage DIY nodality augmented reality. modem Shibuya office rifle rebar convenience store sensory. pre- render-farm hacker human dome plastic katana. into papier-mache BASE jump modem math- neural 8-bit. free-market hacker refrigerator warehouse convenience store euro-pop j-pop. savant bicycle fluidity rifle range-rover narrative sprawl. receding neural receding ablative drone tattoo savant. drone stimulate kanji post- augmented reality pre- Shibuya. faded vinyl rain range-rover neon computer drone.</p>
        <p class="mb-5">Below are some of the methods we can employ to get the information that we need:</p>
        
        <p class="border-b border-r border-pink-500 inline-block pr-4">METHOD getElementById</li>
        
        <p class="mb-2">Method <span class="text-purple-500">getElementById</span> is what we employ the most at the corporation. This will allow you to attach onto an element that has a defined ID. </p>
        <p class="bg-black mb-5 pl-2">const cyberElement = document.<span class="text-lime">getElementById</span>('cyberElementId')</p>
    
        <p class="border-b border-r border-pink-500 inline-block pr-4">METHOD querySelector</p>
    
        <p class="mb-2">Method <span class="text-purple-500">querySelector</span> allows the operator to attach onto an element that has a defined class. This is necessary to use when you are doing a scan but the elements' ID is not identified.</p>
    
        <p class="bg-black mb-5 pl-2">const cyberElement = document.<span class="text-lime">querySelector</span>('.cyberElementClass')</p>
        
        <p class="border-b border-r border-pink-500 inline-block pr-4">METHOD querySelectorAll</p>
    
        <p class="mb-2">Method <span class="text-purple-500">querySelectorAll</span> allows you to grab multiple class elements at once. This will be used when you need to employ certain functions and tactics to a group.</p>
    
        <p class="bg-black mb-5 pl-2">const cyberElements = document.<span class="text-lime">querySelectorAll</span>('.cyberElementGroup')</p>
    
        <p class="border-b border-r border-pink-500 inline-block pr-4">METHOD getElementsByTagName</li>
        
        <p class="mb-5">Method <span class="text-purple-500">getElementsByTagName</span> attaches to an HTMLCollection of elements. For example, If you would like to grab all of the 'h1' elements, you would use this method.</p>
    
        <p class="bg-black mb-5 pl-2">const cyberHeadings = document.<span class="text-lime">getElementsByTagName</span>('h1')</p>
        
        <p>Simulation Exercises</p>
    
        <div class="bg-black text-s pl-2 pt-2 pb-2 mb-5">
        <p class="mb-2">On a mission you come across a system that you must break into. In order to do this you need to pull out several elements to augment. You are presented with the following code when you penetrate the initial layer of the firewall:</p> 
        <p>Device INITIATED AT 00:29 // Alarms have not been triggered</p>
        <p>Results have come back NEGATIVE</p>
        <p>KEY Elements are in Resting State // P4623</p>
        <p>EMPLOYEE CLASS === CEO STATUS // REDACTED (ID NUMBER = &lt;div id="ceoStatus"&gt;)</p>
        <p>RANDALL FROST (Last Known Location) CLOUD ARRAY: &lt;img href="/surveillance/location/1114032.png" class="concourse"&gt;
        </div>

        <small>Please answer the following questions</small>
        <p>1. What phrase is the CEO ID linked to? <input id="obtainingElements1" class="bg-black text-aqua mr-1 ml-1 h-5 w-20 text-center"></input></p>
        <button id="obtainingElements1Btn" class="text-aqua text-xs items-center bg-black pl-1 pr-1 mt-2 mb-4 z-10 focus:outline-none">
        PROCESS ANSWER</button><div id="obtainingElements1Result" class=""></div>
    
        <p>2. To obtain <span id="redacted2" class="bg-black text-red-500">REDACTED</span> ID we would need to use the <input id="obtainingElements2" class="bg-black text-aqua mr-1 ml-1 h-5 w-30 text-center"></input> method.</p>
        <button id="obtainingElements2Btn" class="text-aqua text-xs items-center bg-black pl-1 pr-1 mt-2 mb-4 z-10 focus:outline-none">
        PROCESS ANSWER</button><div id="obtainingElements2Result"></div>

        <p>3. A surveillance photo of the CEO's last known location is available but we can only access with the <span class="text-purple-500">class</span> selector. To do this we would need to use the <input id="obtainingElements3" class="bg-black text-aqua mr-1 ml-1 h-5 w-25 text-center"></input> method.</p>
        <button id="obtainingElements3Btn" class="text-aqua text-xs items-center bg-black pl-1 pr-1 mt-2 mb-4 z-10 focus:outline-none">
        PROCESS ANSWER</button><div id="obtainingElements3Result" class=""></div>

        <p>4. What would you have to type into the console to obtain the information linked to the <span class="text-purple-500">class</span>? Note: When you are using classes, you must place a decimal point ("." / dot) before the className.   <input id="obtainingElements4" class="bg-black text-aqua mr-1 ml-1 h-5 w-20 text-center"></input></p>
        <button id="obtainingElements4Btn" class="text-aqua text-xs items-center bg-black pl-1 pr-1 mt-2 mb-4 z-10 focus:outline-none">
        PROCESS ANSWER</button><div id="obtainingElements4Result" class=""></div>
        `
    },
    {
        'title': 'Event Listeners // Click',
        'id': 'event-listeners',
        'data': 
        `<div id="eventListenerClick" class="mb-20">
        <h1 class="text-4xl pl-1 border-l-4 border-b border-pink-500 inline-block">Event Listeners</h1>
        <h4 class="mt-4 mb-4 text-base">We are always listening...</h4>
        <div class="border-b-2 mb-5"></div>
        <p class="mb-5">As an operator, you will need to become proficient at planting listening devices. We here at the JS/Onboarding like to refer to these devices as <span class="text-purple-500">eventListeners</span>. These devices are attached to the base of an element and serve as a doorway, giving us access to certain areas of the code to change things as we see fit.</p>
        
        <small>The following is an example of an ACTIVE <span class="text-purple-500">eventListener</span> after installation</small>

        <div class="bg-black mb-5 pl-2">
        <p class="text-aqua">// IN HTML //</p>
        <p class="mb-5"><span class="text-yellow-500">1//</span> &lt;button id="access-button"&gt;ACCESS&lt;/button&gt;</p>

        <p class="text-aqua">// IN JAVASCRIPT //</p>

        <p class="mb-5"><span class="text-yellow-500">2//</span> const accessBtn = document.getElementById('access-button')</p>

        <p><span class="text-yellow-500">3//</span> accessBtn.<span class="text-lime">addEventListener</span>('<span class="text-aqua">click</span>', <span class="text-color-purple">( ) =></span> {</p>
            <p><span class="text-yellow-500">4//</span> activateAlarm( );</p>
        <p>})</p>
        </div>

        <ul>
        <li class="mb-5"><span class="text-yellow-500">1// </span>Identify the element in the HTML sector that you would like to attach the <span class="text-purple-500">eventListener</span> to. In this case it is a button that will send a call for SECURITY FORCES if it is <span class="text-aqua">clicked</span>.</li>
        <li class="mb-5"><span class="text-yellow-500">2//</span> In JavaScript, we use the id of the button ("access-button"), to create a variable. We have applied this to a const variable and called it accessBtn. This variable will give us access to implant the listening device.</li>
        <li class="mb-5"><span class="text-yellow-500">3//</span> Using the accessBtn we attach the listening device by adding the <span class="text-lime">addEventListener</span> prefix to it. We must then identify what we will be listening for, in this case, it is for someone to "<span class="text-aqua">click</span>" the button. Clicking the button will activate the function portal [Identified as <span class="text-purple-500">( ) =></span>] and activate the commands we have coded.</li>
        <li class="mb-5"><span class="text-yellow-500">4//</span> This is the code that will be activated once the button is clicked. You can make it whatever you want. Make it whatever is necessary to ensure mission success. In this case we have called the function that will activate the alarm.
        </ul>

        <p class="mb-5">Here is what the final product will look like (click to activate alarm):</p>
        <div class="flex mb-5">
        <div>
        <button id="access-button" class="p-2 bg-red-800 text-white mx-auto border border-red-800">EMERGENCY</button>
        </div>
        <div id="security-forces" class="p-2 bg-black text-red-800 border border-red-800 invisible">
        <small>SECURITY DISPATCHED</small>
        </div>
        </div>

        <p>While "<span class="text-aqua">click</span>" is the most commonly used <span class="text-purple-500">eventListener</span>, many others exist. We will cover more of them as you get further along in your training.</p>
        </div>`
    },
    // {
    //     'title': 'Functions',
    //     'id': 'functions',
    //     'data': 'AREA NOT YET COMPLETE // PLEASE CONTACT SYSTEM ADMIN'
    // },
    // {
    //     'title': 'Loops',
    //     'id': 'loops',
    //     'data': 'AREA NOT YET COMPLETE // PLEASE CONTACT SYSTEM ADMIN'
    // }
];

const projectsArray = [
    {
        'title': 'Progress Bar // Initiate Hack',
        'id': 'progressBar',
        'data': `
        <div class="mb-40">
            <div id="progress-bar-project" class="mb-20">
                <h1 class="text-4xl pl-1 border-l-4 border-b border-pink-500 inline-block">Progress Bar // Initiate Hack</h1>
                <h4 class="mt-4 mb-4 text-base">Progress means moving forward...</h4>
                <div class="border-b-2 mb-5"></div>  
                <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet facilisis magna etiam tempor. Morbi tincidunt ornare massa eget egestas purus. Ridiculus mus mauris vitae ultricies leo. Volutpat sed cras ornare arcu. Volutpat diam ut venenatis tellus in. Aliquam etiam erat velit scelerisque in. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Non blandit massa enim nec dui. Tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                <div id="progressTerminal" class="border h-20 flex items-center justify-end pr-5">
                    <button id="progress-initial-button" class="mr-2 ml-5 pr-1 pl-1 bg-gray-900 text-xs">ESTABLISH CONNECTION</button>
                    <div id="progress-initial-hack" class="progress-initial-hack mr-4 flex flex-col justify-end">
                        <div id="progress-initial-hack-complete" class="progress-initial-hack-complete"></div>
                    </div>

                    <div id="progress-connect-hack" class="progress-connect-hack">
                        <div id="progress-connect-hack-complete" class="progress-connect-hack-complete bg-aqua"></div>
                    </div>

                    <button id="progress-hack-button"class="pr-1 pl-1 bg-gray-900 ml-2 mr-2">INITIATE HACK</button>
                    <div id="progress-hack" class="progress-hack text-center">
                        <div id="progress-hack-complete" class="progress-hack-complete items-center"></div>
                    </div>
                </div>
                <p class="mb-5 mt-5">Now it's your turn.</p>
                <p class="mb-5">Since we are already in the system, I can proceed directly to teaching you the Progress Hack.</p>
                <p class="mb-5">The first thing you need to do build a trigger and establish a programming environment. Let me lay it out for you step by step.</p>

                <p class="mb-5"><span class="text-yellow-500">1//</span> HTML Sector: Create a BUTTON that will you will use as a trigger and a DIV that will serve as the container for the progress bar. Try to think of this as the thing you will be hacking.</p>

                <div class="bg-black p-2">
                    <p>[button id="progress-button"]ACTIVATE[/button]</p>
                    <p class="mb-5">[div id="progress-computer" class="progress-computer"]</p>
                    <p>[/div]</p>
                </div>

                <p class="mb-5 mt-5"><span class="text-yellow-500">2//</span> HTML Sector: Next we want to embed our hack inside of the newly created container. Create another DIV that will serve as the hack and place it inside in the "progress-computer" DIV.</p>

                <div class="bg-black p-2">
                    <p>[button id="progress-button"]ACTIVATE[/button]</p>
                    <p>[div id="progress-computer" class="progress-computer"]</p>
                        <p class="pl-5">[div id="rookie-progress-hack" class="rookie-progress-hack"][/div]</p>
                    <p>[/div]</p>
                </div>

                <p class="mb-5 mt-5"><span class="text-yellow-500">3//</span> CSS Sector: Now we need to design what kind of hack we would like to use in the CSS sector. What you need to do first is tell your monitor what you will be hacking. This will require you input the class of the unit (.progress-computer) to access it, and then you will need to designate a width, and a background color.</p>

                <div class="bg-black p-2">
                    <p>.progress-computer {</p>
                        <p class="pl-5">width: 100px;</p>
                        <p class="pl-5">background-color: #000;</p>
                    <p>}</p>
                </div>

                <p class="mb-5 mt-5"><span class="text-yellow-500">4//</span> CSS Sector: Now design your hack. The only components you will need to enter is the class name that you gave it (.rookie-progress-hack), the height, and the background-color you would like to inject. What you will also need to do is give the "progress-computer" a position of relative, and the "rookie-progress-hack" a position of absolute. This will position our hack over top of the "progress-computer" to streamline our connection.</p>

                <div class="bg-black p-2">

                    <p>.progress-computer {</p>
                        <p class="pl-5">width: 100px;</p>
                        <p class="pl-5">background-color: #000;</p>
                        <p class="pl-5">position: relative</p>
                    <p class="mb-5">}</p>

                    <p>.rookie-progress-hack {</p>
                        <p class="pl-5">height: 20px;</p>
                        <p class="pl-5">background-color: #EC4899;</p>
                        <p class="pl-5">position: absolute</p>
                    <p>}</p>
                </div>

                <p class="mt-5 mb-5"><span class="text-yellow-500">5//</span> <span class="text-pink-500">JavaScript Sector:</span> Now the fun part, the actual hack. Try not to get too overwhelmed, once you get the hang of it, you'll be able to do this in your sleep. Trust me, I once actually had to.</p>
                <p class="mb-5">The first thing you want to do is ready your hack by assigning it to a variable. Grab it by the ID ('rookie-hack')</p>

                <div class="bg-black p-2">
                        <p>const rookieHack = document.getElementById('rookie-hack')</p>
                </div>

                <p class="mt-5 mb-5"><span class="text-yellow-500">6//</span> <span class="text-pink-500">JavaScript Sector:</span> Now create a variable for width and set it to 0. The width must be set to a "let" variable because it will need to change over the course of the hack.</p>

                <div class="bg-black p-2">
                        <p>const rookieHack = document.getElementById('rookie-hack');</p>
                        <p>let width = 0;</p>
                </div>

                <p class="mt-5 mb-5"><span class="text-yellow-500">6//</span> <span class="text-pink-500">JavaScript Sector:</span> Now we need to set how we are going to attack the target. We will accomplish this by using setInterval( ) to call a function. If you look below, we must first set this to a variable, let's use "const progress." Inside this variable, we are going to store setInterval along with the function we are going to call and how often we are going to call it. We will call the function "hack" and let's set the variable to 30. This means that the function will run once every 30 milliseconds.</p>

                <div class="bg-black p-2">
                        <p>const rookieHack = document.getElementById('rookie-hack');</p>
                        <p>let width = 0;</p>
                        <p>const progress = setInterval(hack, 30)</p>
                </div>

                <p class="mt-5 mb-5"><span class="text-yellow-500">6//</span> <span class="text-pink-500">JavaScript Sector:</span> This is the important part of the whole hack. We need to assign what the "hack" function is going to do. In this situation, we are going to keep it really simple and inject the hack into the target computer. This will cause the width of our hack to increase every time the "hack" function is called.</p>

                <div class="bg-black p-2 mb-5">
                    <p>const rookieHack = document.getElementById('rookie-hack');</p>
                    <p>let width = 0;</p>
                    <p>const hack = setInterval(progress, 30)</p>
                    <p>function progress( ) {</p>
                        <p class="ml-5">if (width >= 100) {</p>
                            <p class="ml-10">clearInterval(hack);</p>
                        <p class="ml-5">} else {</p>
                            <p class="ml-10">width++;</p>
                            <p class="ml-10">rookieHack.style.width = width + '%';</p>
                        }
                    }  
                </div>

                <p class="mt-5 mb-5"><span class="text-yellow-500">7//</span> <span class="text-pink-500">JavaScript Sector:</span> Now before you attempt it yourself and potentially screw it up, let me run down all the steps for you.</p>
                <p>1// Assign the rookieHack variable by using the 'rookie-hack' id.</p>
                <p>2// Assign the "width" variable to 0 (Make sure to use "let")</p>
                <p>3// Assign the "hack" variable to setInterval( progress, 30). What this will do is call the progress( ) function every 30 milliseconds</p>
                <p>4// Create the "progress" function.</p>
                <p>5// Assign an IF statement. Basically this and the next line state that when the "width" hits 100, the Interval will be cleared and the hack should be complete.</p>
                <p>6// Assign an ELSE statement. If "width" does not equal 100, keep increasing it by increments of 1 (++) until it does.
                <p class="mb-5">7// This is an internal JavaScript command that will increase the width of rookieHack by a percentage. This will be "width" + the % string.

                <p class="mb-5">It's as easy as that.</p>
                
                <p class="mb-5">So rookie, are you ready to give it a try? Inititiate the hack and let's see if we're going home alive or if we're going to be swarmed by bloodthirsty SECURITY drones.</p>
                
                    <div class="p-1 flex">
                        <button id="progress-button" class="bg-purple-600 mb-4 p-1 mr-4">HACK</button></p>
                        <div id="progress-computer" class="progress-computer mt-2"></p>
                            <div id="rookie-progress-hack" class="rookie-progress-hack text-center"></div>
                        </div>
                    </div>
                
                <p>Hmmmm... not bad. A little sloppy but you got the job done. If you ever need to review what you learned here tonight, the logs will always be accessible in your HUD</p>
            </div>
        </div>
`
    }
];

function conceptOpen() {
    conceptList();
}

function conceptList() {
        if (conceptUl.innerText === '') {
        conceptArray.forEach( (concept, index) => {
        const li = document.createElement('li');
        conceptUl.className = ('concept-ul')
        li.className = ('concept-li')
        li.id = concept.id
        li.dataset.index = index
        li.innerHTML = `
            ${concept.title}
        `
        projectsUl.innerHTML = ''
        conceptUl.appendChild(li);
    })
    } else {
        conceptUl.innerHTML = ''
        conceptUl.className = ''
    }
}

function projectsOpen() {
    projectsList();
    conceptUl.className = ''
}

function projectsList() {
    if (projectsUl.innerText === '') {
        projectsArray.forEach( (project, index) => {
        const li = document.createElement('li');
        li.className = ('border border-purple-500 pr-4 cursor-pointer transform hover:border-purple-500 hover:bg-purple-500 transform hover:pr-6 duration-500')
        li.id = project.id
        li.dataset.index = index
        li.innerHTML = `
            ${project.title}
        `
        conceptUl.innerHTML = ''
        projectsUl.appendChild(li);
    })
    } else {
        projectsUl.innerHTML = ''
    }
}

function populateDomConcepts(index) {
    main.innerHTML = '';
    const operatorDiv = document.createElement('div')
    operatorDiv.className = "mb-20"
    const operatorData = conceptArray[index].data
    operatorDiv.innerHTML = operatorData;
    main.appendChild(operatorDiv)
}

function populateDomProjects(index) {
    main.innerHTML = '';
    const operatorDiv = document.createElement('div')
    operatorDiv.className = "mb-20"
    const operatorData = projectsArray[index].data
    operatorDiv.innerHTML = operatorData;
    main.appendChild(operatorDiv)
}

// Event Listeners for Navigation

conceptsBtn.addEventListener('click', conceptOpen)

conceptUl.addEventListener('click', (e)=> {
    if (e.target.tagName = 'li') {
        const index = e.target.dataset.index
        populateDomConcepts(index);
    }
})

projectsBtn.addEventListener('click', projectsOpen)

projectsUl.addEventListener('click', (e) => {
    if (e.target.tagName = 'li') {
        const index = e.target.dataset.index
        populateDomProjects(index)
    }
})

// Declaring Variables Questions

main.addEventListener('click', (e) => {
    const const1 = document.getElementById('const1')
    const const1Result = document.getElementById('const1Result')
    if (e.target.id === 'const1Btn') {
        // const const1Btn = document.getElementById('const1Btn')
        if (const1.value === 'const') {
            const1Result.innerHTML = `<p>CORRECT</p>`
            const1Result.className = 'text-lime bg-black pl-10 pr-2 inline-block text-xs'
        } else {
            const1Result.innerHTML = `<p>INCORRECT</p>`
            const1Result.className = 'text-red-500 bg-black pl-10 pr-2 inline-block text-xs'
        }
    }
})

main.addEventListener('click', (e) => {
    const const2 = document.getElementById('const2')
    const const2Result = document.getElementById('const2Result')
    if (e.target.id === 'const2Btn') {
        // const const1Btn = document.getElementById('const1Btn')
        if (const2.value === 'let') {
            const2Result.innerHTML = `<p>CORRECT</p>`
            const2Result.className = 'text-lime bg-black pl-10 pr-2 inline-block text-xs'
        } else {
            const2Result.innerHTML = `<p>INCORRECT</p>`
            const2Result.className = 'text-red-500 bg-black pl-10 pr-2 inline-block text-xs'
        }
    }
})

// Developer Tools Questions
main.addEventListener('click', (e) => {
    const consoleHack = document.getElementById('console-hack')
    if (e.target === consoleHack) {
        consoleProgress(); 
    }
})

function consoleProgress() {
    const hack2 = document.getElementById('hack-2')
    const hack2a = document.getElementById('hack-2a')
    hack2.classList.remove('invisible')
    let width = 0;
    let progress = setInterval(frame, 60);
        function frame() {
            if (width === 100) {
                clearInterval(progress);
            } else {
                width++
                hack2a.style.width = width + '%'
                hack2a.innerText = `${width}`
                if (width === 100) {
                    hack2a.innerText = `COMPLETE`
                    console.log('HACK COMPLETE')
                }
            }
        }
}

// Obtaining DOM Elements Questions

main.addEventListener('click', (e) => {
    const obtainingElements1 = document.getElementById('obtainingElements1')
    const obtainingElements1Result = document.getElementById('obtainingElements1Result')
    const obtainingElements2Redacted = document.getElementById('redacted2')
    if (e.target.id === 'obtainingElements1Btn') {
        if (obtainingElements1.value === 'ceoStatus') {
            obtainingElements1Result.innerHTML = `<p>CORRECT</p>`
            obtainingElements1Result.className = 'text-lime bg-black pl-10 pr-2 inline-block text-xs'
            obtainingElements2Redacted.classList.remove('text-red-500')
            obtainingElements2Redacted.classList.add('text-lime')
            obtainingElements2Redacted.innerText = 'UNLOCKED'
            setTimeout(function(){ 
                obtainingElements2Redacted.innerText = 'ceoStatus'; 
            }, 2000);
        } else {
            obtainingElements1Result.innerHTML = `<p>INCORRECT</p>`
            obtainingElements1Result.className = 'text-red-500 bg-black pl-10 pr-2 inline-block text-xs'
        }
    }
})

main.addEventListener('click', (e) => {
    const obtainingElements1 = document.getElementById('obtainingElements2')
    const obtainingElements1Result = document.getElementById('obtainingElements2Result')
    if (e.target.id === 'obtainingElements2Btn') {
        if (obtainingElements1.value === 'getElementById') {
            obtainingElements1Result.innerHTML = `<p>CORRECT</p>`
            obtainingElements1Result.className = 'text-lime bg-black pl-10 pr-2 inline-block text-xs'
        } else {
            obtainingElements1Result.innerHTML = `<p>INCORRECT</p>`
            obtainingElements1Result.className = 'text-red-500 bg-black pl-10 pr-2 inline-block text-xs'
        }
    }
})

main.addEventListener('click', (e) => {
    const obtainingElements3 = document.getElementById('obtainingElements3')
    const obtainingElements3Result = document.getElementById('obtainingElements3Result')
    if (e.target.id === 'obtainingElements3Btn') {
        if (obtainingElements3.value === 'querySelector') {
            obtainingElements3Result.innerHTML = `<p>CORRECT</p>`
            obtainingElements3Result.className = 'text-lime bg-black pl-10 pr-2 inline-block text-xs'
        } else {
            obtainingElements3Result.innerHTML = `<p>INCORRECT</p>`
            obtainingElements3Result.className = 'text-red-500 bg-black pl-10 pr-2 inline-block text-xs'
        }
    }
})

main.addEventListener('click', (e) => {
    const obtainingElements4 = document.getElementById('obtainingElements4')
    const obtainingElements4Result = document.getElementById('obtainingElements4Result')
    if (e.target.id === 'obtainingElements4Btn') {
        if (obtainingElements4.value === '.concourse') {
            obtainingElements4Result.innerHTML = `<p>CORRECT</p>`
            obtainingElements4Result.className = 'text-lime bg-black pl-10 pr-2 inline-block text-xs'
        } else {
            obtainingElements4Result.innerHTML = `<p>INCORRECT</p>`
            obtainingElements4Result.className = 'text-red-500 bg-black pl-10 pr-2 inline-block text-xs'
        }
    }
})

// Add EventListener Click Questions

main.addEventListener('click', (e) => {
    if (e.target.id === 'access-button') {
        const securityForces = document.getElementById('security-forces')
        securityForces.classList.remove('invisible')
        console.log(e.target)
    }
})

// PROJECTS SECTION

// Progress Bar - Initiate Hack Project

function progressInitialHack() {
    console.log('CONNECTION MADE')
    const progressInitialHackComplete = document.getElementById('progress-initial-hack-complete')
    let height = 0;
    let hack = setInterval(progress, 20);
        function progress() {
            if (height >= 100) {
                clearInterval(hack);
            } else {
                height++;
                progressInitialHackComplete.style.height = height + '%';
                    if (height === 100) {
                        console.log('SENDING DATA')
                        progressConnectHack();
                }
            }
        }     
}

function progressConnectHack() {
    const progressConnectHackComplete = document.getElementById('progress-connect-hack-complete')
    let width = 0;
    const hack = setInterval(progress, 40);
        function progress() {
            if (width >= 100) {
                clearInterval(hack);
            } else {
                width++;
                progressConnectHackComplete.style.width = width + '%';
                    if (width === 100) {
                        console.log('HACK PREPARED')
                        progressHackComplete();
                    }
            }
        }
}

function progressHackComplete() {
    const progressHackButton = document.getElementById('progress-hack-button');
    progressHackButton.style.color = 'lime'
    progressHackButton.addEventListener('click', () => {
        const progressHack = document.getElementById('progress-hack-complete')
        let width = 0;
        const hack = setInterval(progress, 50);
            function progress() {
                if (width >= 100) {
                    clearInterval(hack);
                } else {
                    width++;
                    progressHack.style.width = width + '%'
                    progressHack.innerText = `${width}%`
                        if (width === 100) {
                            progressHack.innerText = `HACK COMPLETE`
                            console.log('HACK COMPLETE')
                        }
                }
            }
    })
}

function progressRookieHack() {
    console.log('Rookie Hack Initiated')
    const rookieHack = document.getElementById('rookie-progress-hack');
        let width = 0;
        const hack = setInterval(progress, 30)
            function progress() {
                if (width >= 100) {
                clearInterval(hack);
                    } else {
                        width++;
                        rookieHack.style.width = width + '%';
                    } if (width === 100) {
                        rookieHack.innerText = 'OK'
                        console.log('Rookie Hack Complete // Rating: Sloppy')
                    }
             }  
}

main.addEventListener('click', (e) => {
    if (e.target.id === 'progress-button') {
        progressRookieHack();
    }
})

main.addEventListener('click', (e) => {
    if (e.target.id === 'progress-initial-button') {
        progressInitialHack();
    }
})
