# Tenka1 Programmer Beginner Contest 2019
## B - *e**** ********e* *e****e* ****e**
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    int n, k;
    string s;
    cin >> n >> s >> k;

    for (int i = 0; i < n; i++) {
        cout << (s[i] == s[k - 1] ? s[i] : '*');
    }

    cout << endl;
}
```
