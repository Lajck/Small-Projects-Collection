#!/bin/sh

# Text properties
GREEN=$(tput setaf 2)
BLUE=$(tput setaf 4)
RED=$(tput setaf 1)
BOLD=$(tput bold)
RESET=$(tput sgr0)

bin2Dec() {
	clear 

	local invalidCharsRegex='[^0-1]' # Any value that is not 0 or 1
	local binaryLength=${#BINARY}

	# If there are invalid characters or the number is bigger than 32 chars,
	# go back to the input menu
	if [[ $BINARY =~ $invalidCharsRegex ]] || [ $binaryLength -gt 32 ] ; then
		echo "${RED}Invalid value${RED}"
		sleep 2
		input
	else
		local digit=0
		local decimal=0

		for i in $(seq 1 "$binaryLength"); do	
			digit="${BINARY:(i - $binaryLength) * (-1):1}"
			decimal=$(( "$decimal" + ((2 ** (i - 1)) * digit) ))
		done

		echo "${GREEN}|${RESET} Binary  : $BINARY"
		echo "${GREEN}|${RESET} Decimal : $decimal"
	fi

}

input() {
	clear
	echo "${BOLD}${GREEN}Bin2Dec${RESET} - Transform binary in decimal"
	echo "-"
	read -p 'Insert the binary number: ' BINARY
	bin2Dec
}

input




