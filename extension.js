const Main = imports.ui.main;

function init()
{
    ;
}

function enable()
{
    if (typeof(Main.panel._statusArea) === "undefined")
    {
	Main.panel.statusArea["bluetooth"].actor.hide();
    }
    else
    {
	Main.panel._statusArea["bluetooth"].actor.hide();
    }
}

function disable()
{
    if (typeof(Main.panel._statusArea) === "undefined")
    {
	Main.panel.statusArea["bluetooth"].actor.show();
    }
    else
    {
	Main.panel._statusArea["bluetooth"].actor.show();
    }
}
