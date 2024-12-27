#!/bin/bash

# Funzione per convertire una stringa in camel case
to_camel_case() {
    local input="$1"
    local result=""
    local capitalize_next=1

    for ((i = 0; i < ${#input}; i++)); do
        char="${input:i:1}"
        if [[ "$char" =~ [^a-zA-Z0-9] ]]; then
            capitalize_next=1
        else
            if [[ $capitalize_next -eq 1 ]]; then
                result+="${char^^}"
                capitalize_next=0
            else
                result+="${char,,}"
            fi
        fi
    done

    echo "$result"
}

# Funzione per convertire una stringa da camel case a separata con -
from_camel_case() {
    local input="$1"
    local result=""

    # Aggiunge un "-" prima delle lettere maiuscole e converte tutto in minuscolo
    result=$(echo "$input" | sed -E 's/([a-z0-9])([A-Z])/\1-\2/g' | tr '[:upper:]' '[:lower:]')

    echo "$result"
}

progress_bar() {
    local progress=$1
    local total=$2
    local percent=$(( progress * 100 / total ))
    local filled=$(( progress * 50 / total ))
    local empty=$(( 50 - filled ))

    printf "\rProgress: |%s%s| %d%%" "$(printf '█%.0s' $(seq 1 $filled))" "$(printf ' %.0s' $(seq 1 $empty))" "$percent"
}

total_files=$(find . -type f | wc -l)
current_file=0

# Cicla attraverso tutti i file nelle sottocartelle
find . -type f | while read -r file; do
    ((current_file++))
    # Estrae la directory, il nome del file e l'estensione
    dir=$(dirname "$file")
    base=$(basename "$file")
    name="${base%.*}" # Nome senza estensione
    ext="${base##*.}" # Estensione

    # Rimuove parentesi e simbolo %
    new_name=$(echo "$name" | tr -d '()%')

    # Converte in camel case
    new_name=$(to_camel_case "$new_name")

    # Converte in kebab case
    new_name=$(from_camel_case "$new_name")

    # Ricompone il nome completo con l'estensione
    new_file="$new_name.$ext"

    # Rinomina il file solo se il nome cambia
    if [[ "$base" != "$new_file" ]]; then
        echo "Renaming '$file' to '$dir/$new_file'\n"
        mv "$file" "$dir/$new_file"
    fi

    progress_bar "$current_file" "$total_files"
done

echo "Operazione completata."
