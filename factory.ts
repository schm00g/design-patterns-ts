class IOSButton {}

class AndroidButton {}

const os = "ios";

// Without factory
const button1 = os === 'ios' ? new IOSButton() : new AndroidButton()
const button2 = os === 'ios' ? new IOSButton() : new AndroidButton()

// With factory
class ButtonFactory {
    createButton(os: string): IOSButton | AndroidButton {
        if(os === 'ios'){
            return new IOSButton();
        } else {
            return new AndroidButton();
        }
    }
}

// smart object creation
const factory = new ButtonFactory();
const btn1 = factory.createButton(os);
const btn2 = factory.createButton(os);

/*  for more
    https://refactoring.guru/design-patterns/factory-method/typescript/example */