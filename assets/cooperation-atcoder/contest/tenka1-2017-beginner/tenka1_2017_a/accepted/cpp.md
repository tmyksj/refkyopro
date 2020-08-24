# Tenka1 Programmer Beginner Contest
## A - Accepted...?
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;

    int res = 0;
    for (int i = 0; i < 6; i++) {
        if (s[i] == '1') {
            res++;
        }
    }

    cout << res << endl;
}
```
