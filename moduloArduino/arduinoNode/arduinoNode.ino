int LEDPIN = 6;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  
  pinMode(LEDPIN,OUTPUT);
  digitalWrite(LEDPIN,LOW);
}

void loop() {
  // put your main code here, to run repeatedly:

    // Si tenemos data de elpuerto Serial
               
    if (Serial.available() > 0)
    { 
        char readData;

        readData =(char) Serial.read();
        Serial.println(readData);
        if (readData == 'T')
        {
            digitalWrite(LEDPIN, HIGH);
        }

        if (readData == 'F')
        {
            digitalWrite(LEDPIN, LOW);
        }
        
    }
    delay(10);
}
