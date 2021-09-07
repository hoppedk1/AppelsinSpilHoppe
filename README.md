# p5-appelsiner-i-turbanen
MDA:
Challenge + Pasttime aka submission
<br>
Spillet er meget simplet med en ide af at prøve at fange de 3 bolde og holde sit liv oppe.
<br>
MDA begrundelse:
<br>
M (mechanics): Mechanicsne i spillet er relativt simple med at du endeligt kun kan styre 1 kurv som skal fange imellem 1-3 bolde som bliver skudt afsted. En anden mechanic jeg også har implementeret er functionen "regen" i sketch.js, som fungere sådan at du vil få alt dit liv tilbage efter du når et specielt punkt i scoren, dog så falder max mængden af liv du kan få tilbage hen over tiden, hvilket betyder at spillet bliver ekstremt svært efter en score på 50 da du ikke længere kan regen liv længere. Denne mechanic er især vigtig når man har flere bolde da nogle gange kan du ikke rigtigt fange boldne uden at man har placeret sig korrekt. Efter man har fået muligheden for at få sit liv tilbage har jeg også tilføjet en "missed" counter som kan ses i toppen når man spiller eller midt på når man har tabt.
<br>
D (Dynamic): Dynamicsne i spillet er relativ simple, da der i virkeligheden ikke er så meget dynamisk i min code. Den mest dynamiske feature i spillet er spillerens evne til at controllere kurven, som bliver brugt til at grippe appelsinerne, som bliver skudt afsted fra venstre side af canvas. Ellers er der den dynamic der kommer af at der er flere bolde på banen på samme tid, hvilket betyder at spilleren er tvunget til at acceptere at en boldt vil ramme bunden nogle gange. Eller at der er mulighed at gå ind i koden og tilføje flere appelsiner end det der allerede er.
<br>
A (Aesthetics): Asthetically så har jeg valgt at gøre mine boldte om til appelsiner, da det giver god mening når spillet stammede fra appelsiner i turbanen, Men en anden ændring jeg har lavet er at kurven er ikke er en turban, men istedet en gammel ottomanisk "OnionHat" som er blevet vent på hoved og bliver hermed brugt som en slags kurv. Det eneste problem der ligger aeshetially er at den første bold der bliver skudt afsted ikke har billedet af en appelsin over sig, og den er nødvendig da det er når den orginale bold bliver skudt igen at de andre også bliver sendt afsted. 

