function Bin2Dec(number)
	io.write("\027[H\027[2J")
	local invalidChar = number:match("[^01]")

	if not invalidChar and #number <= 32 then
		local decimal = 0
		for i = 0, #number - 1 do
			local lastCharNumber = (i - #number) * (-1)
			local digit = tonumber(number:sub(lastCharNumber, lastCharNumber))
			decimal = decimal + ((2 ^ i) * digit)
		end

		print("Binary: " .. number)
		print("Decimal: " .. decimal)
	else
		print("Invalid value")
		os.execute('sleep 2')
		Input()
	end
end

function Input()
	io.write("\027[H\027[2J")
	io.write("Insert the binary number: ")
	Binary = io.read()
	Bin2Dec(Binary)
end

Input()
