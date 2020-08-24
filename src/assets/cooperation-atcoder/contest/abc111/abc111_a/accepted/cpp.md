# AtCoder Beginner Contest 111
## A - AtCoder Beginner Contest 999
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;

    for (int i = 0; i < static_cast<int>(s.size()); i++) {
        cout << (s[i] == '1' ? '9' : '1');
    }
    cout << endl;
}
```
