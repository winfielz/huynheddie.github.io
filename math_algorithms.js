<script type="text/javascript">
var operations_list = ["+", "-", "*", "/"];
var operation = operations_list[Math.floor(Math.random()*operations_list.length)];
document.write(operation);
document.write("<br>");
if (operation == "+")
{
	document.write(Math.floor(Math.random() * 100), " + ", Math.floor(Math.random() * 100));
}
else if (operation == '-')
{
	document.write(Math.floor(Math.random() * 100), " - ", Math.floor(Math.random() * 100));
}
else if (operation == '*')
{
	document.write(Math.floor(Math.random() * 10) + 1, " x ", Math.floor(Math.random() * 10) + 1);
}
else if (operation == '/')
{
	var divisor = Math.floor(Math.random() * 100);
	if (divisor % 2 == 0)
	{
		document.write(divisor, " / ", 2);
	}
	else if (divisor % 3 == 0)
	{
		document.write(divisor, " / ", 3);
	}
	else if (divisor % 4 == 0)
	{
		document.write(divisor, " / ", 4);
	}
	else if (divisor % 5 == 0)
	{
		document.write(divisor, " / ", 5);
	}
	else if (divisor % 6 == 0)
	{
		document.write(divisor, " / ", 6);
	}
	else if (divisor % 7 == 0)
	{
		document.write(divisor, " / ", 7);
	}
	else if (divisor % 8 == 0)
	{
		document.write(divisor, " / ", 8);
	}
	else if (divisor % 9 == 0)
	{
		document.write(divisor, " / ", 9);
	}
}
</script>