# AtCoder Beginner Contest 059
## B - Comparison
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string a, b;
    cin >> a >> b;

    if (a == b) {
        cout << "EQUAL" << endl;
    } else if (a.size() > b.size() || (a.size() == b.size() && a > b)) {
        cout << "GREATER" << endl;
    } else {
        cout << "LESS" << endl;
    }
}
```
