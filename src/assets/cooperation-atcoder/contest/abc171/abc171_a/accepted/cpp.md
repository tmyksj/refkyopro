# AtCoder Beginner Contest 171
## A - αlphabet
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string a;
    cin >> a;
    cout << ('A' <= a[0] && a[0] <= 'Z' ? 'A' : 'a') << endl;
}
```
