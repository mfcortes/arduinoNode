int LEDPIN = A6;

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

        readData = Serial.read();

        if (readData == "on")
        {
            digitalWrite(LEDPIN, HIGH);
        }

        if (readData == "off")
        {
            digitalWrite(LEDPIN, LOW);
        }
        
    }
    delay(1000);
}
