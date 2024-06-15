var input = document.getElementById("pass"),
icon = document.getElementById("icon");
icon.onclick = function()
{
    if(input.className == 'active')
    {
        input.setAttribute('type', 'text');
        icon.className = "fa fa-eye";
        input.className = '';
    }
    else
    {
        input.setAttribute
        ('type', 'password');
        icon.className = 'fa fa-eye-slash';
        input.className = 'active';
    }
}
